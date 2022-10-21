
const User = require("../models/usersSchema");


exports.createUserService = async (userInfo) => {
    const category = await User.create(userInfo)
    return category;
}