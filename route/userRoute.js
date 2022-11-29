const express = require('express');
const customerController = require('../controller/userController');

const router = express.Router();

router.post('/signup', customerController.signup);
router.post('/login', customerController.login);
module.exports = router;