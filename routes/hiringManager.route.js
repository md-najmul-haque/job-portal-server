const express = require("express");
const router = express.Router()
const hiringManagerController = require('../controller/hiringManager.Controller');


router.route('/')
    .post(hiringManagerController.createHiringManager)


module.exports = router;