const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { key } = require('../../config/Database');

module.exports = { bcrypt, jwt, key };
