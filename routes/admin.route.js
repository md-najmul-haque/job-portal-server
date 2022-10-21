const express = require("express");
const router = express.Router()
const adminController = require('../controller/admin.controller');


router.get('/candidate', adminController.getCandidate)

module.exports = router;