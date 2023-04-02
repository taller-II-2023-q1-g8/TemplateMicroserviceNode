const { OK, FAILED, BAD_REQUEST } = require("./msg_codes")

const wrong_id_error_msg = {
  status: FAILED,
  data: { error: "Parameter ':id' can not be empty" },
};

const wrong_body_error_msg = {
  status: FAILED,
  data: { error: "Got some wrong body parameter" },
};

const get_id = (req) => {
    const { params: { id } } = req;
    return id;
};

const get_body = (req) => {
  const { body } = req;
  return body;
}

const do_nothing = (value) => {return value;};

const wrap_error_into_res = (error) => {
    return { status: FAILED, data: { error: error?.message || error } }
}

const serve = async (req, res, obtain, validate, fetch, invalid_param_msg) => {
  const params = obtain(req);
  try {
    if (validate(params)) {
      const data = await fetch(params);
      res.status(OK).send({status: OK, data: data});
    } else {
      res.status(BAD_REQUEST).send(invalid_param_msg);
    }
  } catch (error) {
    res
    .status(error?.status || BAD_REQUEST)
    .send(wrap_error_into_res(error));
  }
};

const not_null = (value) => {return value;};

module.exports = {
    get_id, get_body, do_nothing,
    wrap_error_into_res,
    serve,
    not_null,
    wrong_id_error_msg, wrong_body_error_msg,
}