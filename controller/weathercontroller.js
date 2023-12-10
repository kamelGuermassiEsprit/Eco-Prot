
const Weather = require("../model/weather");


async function add(req, res, next) {
  try {
    console.log("body :" + JSON.stringify(req.body));
    const weather = new Weather(req.body);
    await weather.save();
    res.send("weather add");
  } catch (err) {
    console.log(err);
  }
}
async function get(req,res, next) {
  try {
    
    const data = await Weather.find();
    return (data);
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try { 
    await Weather.findByIdAndUpdate(req.params.id, req.body);
   
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}/*
async function affiche(req,res,next) {
  try {
    const r = await Weather.find();
    res.json(r);
    
   
  } catch (err) {
    console.log(err);
  }
}
*/

module.exports = {
  add,
  get,
  update,
  

};
