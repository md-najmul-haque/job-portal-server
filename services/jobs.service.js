const Jobs = require("../models/jobsSchema");

exports.createJobsService = async (data) => {
    const result = await Jobs.create(data)
    return result;
}

exports.getJobsService = async () => {
    const jobs = await Jobs.find({})
        .populate("hiringManager.id")
    return jobs;
}
