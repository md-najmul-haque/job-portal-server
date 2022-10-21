const { createJobsService } = require("../services/jobs.Service")


exports.createJobs = async (req, res, next) => {
    try {
        //create method
        const result = await createJobsService(req.body)

        res.status(200).json({
            stauts: "success",
            massage: "successfully create a Jobs",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not inserted",
            error: error.message
        })
    }
}

exports.getJobs = async (req, res, next) => {
    try {
        const manager = await getJobsService();
        res.status(200).json({
            stauts: "success",
            massage: "successfully get data for all jobs",
            data: manager
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not found",
            error: error.message
        })
    }
}
