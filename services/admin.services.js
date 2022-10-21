
const Candidate = require("../models/candidateSchema");


exports.getCandidateService = async () => {
    const jobs = await Candidate.find({})
    return jobs;
}