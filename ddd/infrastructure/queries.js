const create_table_query = (table, schema, pkey) => {
    return `CREATE TABLE if not exists ${table}
    (${schema.map((col) => {return col.name + " " + col.type}).toString()},
    PRIMARY KEY(${pkey.toString()}));`;
};

const insert_query = (table, columns, dto) => {
    return `INSERT INTO ${table} (${columns.toString()}) VALUES (${dto.to_sql()});`;
};

const get_all_query = (table) => {
    return `SELECT * FROM ${table}`;
}

const get_by_key_query = (table, key) => {
    return `SELECT * FROM ${table} WHERE ${key} = $1`;
}

const delete_by_key_query = (table, key) => {
    return `DELETE FROM ${table} WHERE ${key} = $1`;
}

module.exports = {
    create_table_query,
    get_all_query,
    get_by_key_query,
    insert_query,
    delete_by_key_query,
}