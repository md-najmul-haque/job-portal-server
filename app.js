const express = require("express");
const app = express();
const cors = require("cors");


//middleware
app.use(express.json());
app.use(cors());


//routes
const jobsRoute = require('./routes/jobs.route')
const hiringManagerRoute = require('./routes/hiringManager.route')


// route calling
app.use("/", jobsRoute)
app.use("/manager", hiringManagerRoute)


app.get("/", (req, res) => {
    res.send("Route is working!");
});


module.exports = app;