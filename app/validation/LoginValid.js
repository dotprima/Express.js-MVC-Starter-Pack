const { body } = require('express-validator');

// Validator untuk login user
const loginValidator = [
  body('email').isEmail().withMessage('Email tidak valid.'),
  body('password').notEmpty().withMessage('Password tidak boleh kosong.'),
];

module.exports = { loginValidator };
