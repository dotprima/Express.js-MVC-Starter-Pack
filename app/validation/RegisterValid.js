const { body, validationResult } = require('express-validator');

const registerValidator = [
    body('username').notEmpty().withMessage('Username tidak boleh kosong.'),
    body('email').isEmail().withMessage('Email tidak valid.'),
    body('password').isLength({ min: 6 }).withMessage('Password harus memiliki panjang minimal 6 karakter.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // Validasi bahwa password dan confPassword cocok (sama)
        if (req.body.password !== req.body.confPassword) {
            return res.status(400).json({ msg: 'Password dan Confirm Password tidak cocok' });
        }

        // Jika tidak ada kesalahan, lanjutkan ke middleware berikutnya
        return next();
    },
];

module.exports = { registerValidator };
