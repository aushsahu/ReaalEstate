const mongoose = require("mongoose");
const House = mongoose.Schema({
    Images: [
        { HouseImg: String },
        { HouseImg: String },
    ],
    Price: String,
    Bedroom: String,
    Bathroom: String,
    Kitchen: String,
    SquareFt: String,
    Address:String,
    PropertyDetail: String

})
module.exports = mongoose.model("house", House);