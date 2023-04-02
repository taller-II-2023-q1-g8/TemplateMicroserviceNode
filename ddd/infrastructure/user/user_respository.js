const { v4: uuid } = require("uuid");

const get_all = () => {
    return "get_all";
};

const get_one = (id) => {
    return id;
};

const create_one = (body) => {
    return body;
};

const delete_one = (id) => {
    return id;
};

module.exports = {
    get_all,
    get_one,
    create_one,
    delete_one,
};