const Formation = require("../model/formation");





async function add(req, res, next) {
  try {
    console.log("body :" + JSON.stringify(req.body));
    const formation = new Formation(req.body);
    await formation.save();
    res.send("formation add");
  } catch (err) {
    console.log(err);
  }
}







async function getFormations(req, res,next){
  try {
    const data = await Formation.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





async function getFormationById(req, res,next){
  try {
    const data= await Formation.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





async function updateFormationById(req, res,next){
  try {
    const formation = await Formation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.json(formation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



async function deleteFormationById(req, res,next){
  try {
    const data = await Formation.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.json({ message: 'Formation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};









module.exports = { add, getFormations, getFormationById,updateFormationById,deleteFormationById };