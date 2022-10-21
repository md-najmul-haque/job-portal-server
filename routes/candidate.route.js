const express = require("express");
const router = express.Router()

const candidateController = require('../controller/candidate.Controller');
const uploader = require("../middleware/uploader");

router.get('/jobs', candidateController.getJobs)
router.get('/jobs/:id', candidateController.getJobById)
router.post('/jobs/:id/apply', candidateController.applyJobs)

module.exports = router;