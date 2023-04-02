const { OK } = require("../msg_codes")
const {
  get_id, get_body, do_nothing,
  serve,
  not_null,
  wrong_id_error_msg, wrong_body_error_msg,
} = require("../helpers")

const user_respository = require("../../infrastructure/user/user_respository");

const get_all = (req, res) => {
  serve(req, res, do_nothing, not_null, user_respository.get_all, null);
};

const get_one = (req, res) => {
  serve(req, res, get_id, not_null, user_respository.get_one, wrong_id_error_msg);
};

const create_one = (req, res) => {
  serve(req, res, get_body, not_null, user_respository.create_one, wrong_body_error_msg);
};

const delete_one = (req, res) => {
  serve(req, res, get_id, not_null, user_respository.delete_one, wrong_id_error_msg);
};

module.exports = {
  get_all,
  get_one,
  create_one,
  delete_one,
};