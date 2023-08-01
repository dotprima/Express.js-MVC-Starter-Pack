const express = require('express');

const router = express.Router();
const User = require('../models/Users');
const authMiddleware = require('../middlewares/authMiddleware'); // Impor middleware authMiddleware

/* GET users listing. */
router.get('/', authMiddleware, async (req, res) => {
    try {
        const users = await User.findAll({ limit: 10 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
