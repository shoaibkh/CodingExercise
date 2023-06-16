import pkg from 'pg';
const {Pool} = pkg;

export const DB = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'codingTest',
    password: '123',
    port: 5432, // default PostgreSQL port
});