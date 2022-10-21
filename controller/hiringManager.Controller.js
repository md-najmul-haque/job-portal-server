const { createHiringManagerService } = require("../services/hiringManagerService")

exports.createHiringManager = async (req, res) => {
    try {
        const result = await createHiringManagerService(req.body)
        res.status(200).json({
            stauts: "success",
            massage: "successfully create a Jobs",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not inserted",
            error: error.messages
        })
    }
}