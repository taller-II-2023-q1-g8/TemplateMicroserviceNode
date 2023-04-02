const get_all_query = (table) => {
    return `SELECT * FROM ${table}`;
}

const get_by_id_query = (table) => {
    return `SELECT * FROM ${table} WHERE id = $1`;
}

module.exports = {
    get_all_query,
    get_by_id_query,
}