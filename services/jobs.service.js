const Jobs = require("../models/jobsSchema");

exports.createJobsService = async (data) => {
    const result = await Jobs.create(data)
    return result;
}
