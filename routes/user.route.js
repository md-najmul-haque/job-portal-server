const express = require("express");
const router = express.Router()
const userController = require('../controller/user.controller');
const verifyToken = require("../middleware/verifyToken");


router.post('/user/signup', userController.singup)


module.exports = router;