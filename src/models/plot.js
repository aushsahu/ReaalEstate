const mongoose = require("mongoose");
const Plot = mongoose.Schema({
    Images: [
        { PlotImg: String },
        { PlotImg: String },
    ],
    Price: String,
    SquareFt: String,
    Address:String,
    PropertyDetail: String

})
module.exports = mongoose.model("plot", Plot);