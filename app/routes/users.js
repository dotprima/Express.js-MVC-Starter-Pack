var express = require('express');
var router = express.Router();
const User = require('../models/Users');
const authMiddleware = require('../middlewares/authMiddleware'); // Impor middleware authMiddleware

/* GET users listing. */
router.get('/', authMiddleware, async function (req, res, next) {
  try {
    const users = await User.findAll({ limit: 10 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
