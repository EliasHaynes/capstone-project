require('dotenv').config();
const mysql = require('mysql2')


const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

class Connection {
    constructor() {
        console.log('...creating connection')
        if(!this.pool) {
            //If the object pool doesnt exist: create it and then return it
            this.pool = mysql.createPool ({
                connectionLimit: 100,
                host: host,
                user: user,
                password: password,
                database: database
            })
            return this.pool
        }
        //If the object pool does exist then just return it
        return this.pool;
    }
}

const instance = new Connection();

module.exports = instance;