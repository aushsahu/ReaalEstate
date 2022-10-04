const mongoose = require('mongoose');
const About = mongoose.Schema({
    AboutUs:String,
    AboutImg:String
})
module.exports = mongoose.model("about",About);