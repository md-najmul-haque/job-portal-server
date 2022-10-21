const express = require("express");
const router = express.Router()
const jobsController = require('../controller/jobs.controller');
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

router.post('/jobs', jobsController.createJobs)
router.get('/manager/jobs', verifyToken, jobsController.getJobs)
router.get('/manager/jobs/:id', verifyToken, authorization("Hiring-Manager", "Admin"), jobsController.getJobById)
router.patch('/jobs/:id', jobsController.updateJob)


module.exports = router;