class User {

    constructor(dni, name, age) {
        this.dni = dni;
        this.name = name;
        this.age = age;
    };

    static to_user(body) {
        return new User(body.dni, body.name, body.age);
    };

    key() {
        return this.dni;
    }

    to_sql() {
        return `${this.dni}, '${this.name}', ${this.age}`;
    }
};

module.exports = User;