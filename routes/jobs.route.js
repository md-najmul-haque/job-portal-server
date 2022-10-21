const express = require("express");
const router = express.Router()
const jobsController = require('../controller/jobs.controller');


router.post('/jobs', jobsController.createJobs)


module.exports = router;