const {
    create_table_query,
    get_all_query,
    get_by_key_query,
    insert_query,
    delete_by_key_query,
} = require('./queries')

class Table {

    constructor(db, name, schema) {
        this.db = db;
        this.name = name;
        this.schema = schema;
        this.columns = schema.map((o) => {return o.name;});
        this.pkey = schema.filter((o) => {return o.pkey}).map((o) => {return o.name;});
        this.create();
    };

    async create() {
        try {
            await this.db.query(create_table_query(this.name, this.schema, this.pkey));
        } catch (error) {
            throw error;
        }
    };

    async get_all() {
        try {
            const data = await this.db.query(get_all_query(this.name));
            return data.rows;
        } catch (error) {
            throw error;
        }
    };
    
    async get_one(key) {
        try {
            const data = await this.db.query(get_by_key_query(this.name, this.pkey), [key]);
            return data.rows;
        } catch (error) {
            throw error;
        }
    };
    
    async create_one(dto) {
        try {
            let data = await this.db.query(get_by_key_query(this.name, this.pkey), [dto.key()]);
            if (data.rows.length == 0){
                data = await this.db.query(insert_query(this.name, this.columns, dto));
            }
            return data;
        } catch (error) {
            throw error;
        }
    };
    
    async delete_one(key) {
        try {
            const data = await this.db.query(delete_by_key_query(this.name, this.pkey), [key]);
            return data.rows;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = Table;