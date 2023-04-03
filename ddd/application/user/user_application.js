const {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_ERROR,
  NOT_IMPLEMENTED,
} = require("../msg_codes")
const {
  wrong_parameter_error_msg,
  wrong_body_error_msg,
  resource_not_found_msg,
  wrap_error_into_res
} = require("../helpers")

const User = require("../../domain/user/user");

const users_table = require("../../infrastructure/user/user_table");

const get_all = async (req, res) => {
  try {
    const data = await users_table.get_all();
    res.status(OK).send({data: data});
  } catch (error) {
    console.log(error);
    res
    .status(error?.status || INTERNAL_ERROR)
    .send({error: wrap_error_into_res(error)});
  }
};

const get_one = async (req, res) => {
  const { params: { dni } } = req;
  try {
    if (dni) {
      const data = await users_table.get_one(dni);
      if (data.length > 0) {
        res.status(OK).send({data: data});
      } else {
        res.status(NOT_FOUND).send({error: resource_not_found_msg});
      }
    } else {
      res.status(BAD_REQUEST).send({error: wrong_parameter_error_msg});
    }
  } catch (error) {
    console.log(error);
    res
    .status(error?.status || INTERNAL_ERROR)
    .send({error: wrap_error_into_res(error)});
  }
};

const create_one = async (req, res) => {
  const { body } = req;
  try {
    if (body) {
      let user = User.to_user(body);
      const data = await users_table.create_one(user);
      res.status(CREATED).send({data: data});
    } else {
      res.status(BAD_REQUEST).send({error: wrong_body_error_msg});
    }
  } catch (error) {
    console.log(error);
    res
    .status(error?.status || INTERNAL_ERROR)
    .send({error: wrap_error_into_res(error)});
  }
};

const delete_one = async (req, res) => {
  const { params: { dni } } = req;
  try {
    if (dni) {
      let data = await users_table.get_one(dni);
      if (data.length > 0) {
        data = await users_table.delete_one(dni);
        res.status(OK).send({data: data});
      } else {
        res.status(NOT_FOUND).send({error: resource_not_found_msg});
      }
    } else {
      res.status(BAD_REQUEST).send({error: wrong_parameter_error_msg});
    }
  } catch (error) {
    console.log(error);
    res
    .status(error?.status || INTERNAL_ERROR)
    .send({error: wrap_error_into_res(error)});
  }};

module.exports = {
  get_all,
  get_one,
  create_one,
  delete_one,
};