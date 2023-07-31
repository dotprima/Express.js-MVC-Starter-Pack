const express = require('express');
const router = express.Router();
const User = require('../models/Users'); 
const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidator } = require('../validation/RegisterValid');
const { loginValidator } = require('../validation/LoginValid');

const key = require('../../config/Database').key; 

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        const users = await User.findAll({ limit: 10 });
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/register', registerValidator, async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Jika ada error validasi, kirimkan respon dengan status 422 dan daftar error
        return res.status(422).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            NamaDepan: username,
            email: email,
            password: hashPassword
        });
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.post('/login', loginValidator, async function (req, res, next) {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Jika ada error validasi, kirimkan respon dengan status 422 dan daftar error
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        // Cari user berdasarkan email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Email tidak terdaftar' });
        }

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Password salah' });
        }

        // Jika email dan password cocok, buat token JWT
        const token = jwt.sign({ userId: user.id }, key.jwt, { expiresIn: key.time });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;