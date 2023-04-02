const user = require("../../domain/user/user")

const get_all = (req, res) => {
    res.send({status: "Ok", data: user.get_all()});
  };
  
const get_one = (req, res) => {
  res.send({status: "Ok", data: user.get_one()});
};

const create_one = (req, res) => {
  res.send({status: "Ok", data: user.create_one()});
};

const delete_one = (req, res) => {
  res.send({status: "Ok", data: user.delete_one()});
};

module.exports = {
  get_all,
  get_one,
  create_one,
  delete_one,
};