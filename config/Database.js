require('dotenv').config();

const config = {
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION,
    },
    app: {
        port: process.env.port || '3001',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3000',
    },
    key: {
        jwt: process.env.JWT_KEY,
        time: process.env.JWT_TIME,
    },
};

module.exports = config;
