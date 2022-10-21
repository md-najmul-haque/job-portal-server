
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection by mongodb atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mzqqusj.mongodb.net/job_portal`).then(() => {
    console.log(`Database connect successfully`)
});


// port
const port = process.env.PORT || 8080;

//creating server
app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});