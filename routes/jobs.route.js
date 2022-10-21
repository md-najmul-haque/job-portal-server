const express = require("express");
const router = express.Router()
const jobsController = require('../controller/jobs.controller');
const authorization = require("../middlewar/authorization");
const verifyToken = require("../middlewar/verifyToken");

router.post('/jobs', jobsController.createJobs)
router.get('/manager/jobs', verifyToken, jobsController.getJobs)


module.exports = router;