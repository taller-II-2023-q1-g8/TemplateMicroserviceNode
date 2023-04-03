const pool =  require("../db");
const Table =  require("../table");

const name = "users";
const schema = [
    {name: "dni", type: "INT", pkey: true},
    {name: "name", type: "VARCHAR(255)", pkey: false},
    {name: "age", type: "INT", pkey: false},
]

const users_table = new Table(pool, name, schema);

module.exports = users_table;