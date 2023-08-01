const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../../config/Database').key;

module.exports = { bcrypt, jwt , key};