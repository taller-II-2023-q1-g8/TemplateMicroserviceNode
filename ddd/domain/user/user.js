const user_respository = require("../../infrastructure/user/user_respository");

const get_all = () => {
    return user_respository.get_all();
};

const get_one = () => {
    return user_respository.get_one();
};

const create_one = () => {
    return user_respository.create_one();
};

const delete_one = () => {
    return user_respository.delete_one();
};

module.exports = {
    get_all,
    get_one,
    create_one,
    delete_one,
};