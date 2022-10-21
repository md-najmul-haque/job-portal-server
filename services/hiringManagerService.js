const HiringManager = require("../model/hiringManagerSchema");


exports.createHiringManagerService = async (data) => {
    const result = await HiringManager.create(data)
    return result;
}