const pool = require('./db')
const {
    get_all_query,
    get_by_id_query
} = require('../queries')

const TABLE_NAME = "users"

const get_all = async () => {
    try {
        const data = await pool.query(get_all_query(TABLE_NAME));
        return data.rows;
    } catch (error) {
        throw err;
    }
};

const get_one = async (id) => {
    try {
        const data = await pool.query(get_by_id_query(TABLE_NAME), [id]);
        return data.rows;
    } catch (error) {
        throw err;
    }
};

const create_one = async (body) => {
    return body;
};

const delete_one = async (id) => {
    try {
        const data = await pool.query(get_by_id_query(TABLE_NAME), [id]);
        return data.rows;
    } catch (error) {
        throw err;
    }
};

module.exports = {
    get_all,
    get_one,
    create_one,
    delete_one,
};