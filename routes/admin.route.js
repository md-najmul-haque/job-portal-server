
const express = require("express");
const router = express.Router()
const adminController = require('../controller/admin.Controller');
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");


router.get('/candidate', adminController.getCandidate)
router.get('/admin/manager', adminController.getManager)
router.get('/candidate/:id', adminController.getCandidateId)
router.patch('/user/:id', verifyToken, authorization("Admin"), adminController.updateUserRole)

module.exports = router;