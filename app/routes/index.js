var express = require('express');
var router = express.Router();

const { registerValidator } = require('../validation/RegisterValid');
const { loginValidator } = require('../validation/LoginValid');

const authController = require('../controllers/AuthController');

router.get("/", authController.index);
router.post("/register", registerValidator, authController.register);
router.post('/login', loginValidator, authController.login);


module.exports = router;