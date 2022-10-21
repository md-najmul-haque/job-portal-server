
const { getCandidateJobsService } = require("../services/candidate.services");


exports.getJobs = async (req, res, next) => {
    try {
        //find by id
        let filters = { ...req.query }
        //solt,page,limit, --- exclude
        const excludeField = ['sort', 'page', 'limit']
        excludeField.forEach(field => delete filters[field])

        //gt,li,get,lte
        let filterString = JSON.stringify(filters)
        filterString = filterString.replace(/\b(gt|gte|lt|Lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filterString)
        console.log(JSON.parse(filterString))


        const queries = {}
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
        }
        //
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
        }
        const manager = await getCandidateJobsService(filters, queries);
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
