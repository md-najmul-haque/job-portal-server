
const Candidate = require("../models/candidateSchema");
const HiringManager = require("../models/hiringManagerSchema");
const User = require("../models/usersSchema");

exports.getCandidateService = async () => {
    const jobs = await Candidate.find({})
    return jobs;
}

exports.getCandidateByIdService = async (id) => {
    const jobs = await Candidate.findOne({ _id: id }).populate("applyFor.id")
    return jobs;
}

exports.getManagerService = async () => {
    const jobs = await HiringManager.find({})
    return jobs;
}

exports.updateUserRoleService = async (id, data) => {
    const result = await User.updateOne({ _id: id }, data, {
        runValidators: true
    })
    return result;
}