const mongoose = require('mongoose');
const Featured = mongoose.Schema({
   imageUrl:String,
   price:String,
   location:String,
   landmark:String,
   contactNo:String,
   squareFt:String,
   bedroom:String,
   bathroom:String,
   kitchen:String,

}) 
module.exports = mongoose.model("featured",Featured);