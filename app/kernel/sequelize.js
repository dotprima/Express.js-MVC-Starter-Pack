const { Sequelize } = require('sequelize');
const debug = require('debug');

const DbConfig = require('../../config/Database').db; // Sesuaikan path dengan lokasi file config.js

/**
 * DB connection setup
 */
const sequelize = new Sequelize(DbConfig.database, DbConfig.username, DbConfig.password, {
    host: DbConfig.host,
    port: DbConfig.port,
    dialect: DbConfig.dialect,
    define: {
        timestamps: false,
    },
    logging: (msg) => debug('SERVER:sequelize')(msg),
});

module.exports = sequelize;
