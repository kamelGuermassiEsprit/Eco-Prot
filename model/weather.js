const mongo = require("mongoose");
const Schema = mongo.Schema;
const Weather = new Schema({
  
  conditions: String,
  wind:String,
  precipitation:Number,
  visibility:String,
  pressure:String,


});
module.exports = mongo.model("weather", Weather);
