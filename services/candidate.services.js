const Candidate = require("../models/candidateSchema");
const Jobs = require("../models/jobsSchema");

exports.getCandidateJobsService = async (filters, queries) => {
    const jobs = await Jobs.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sortBy)
        .select(queries.fields)
        .populate("hiringManager.id")
    return jobs;
}