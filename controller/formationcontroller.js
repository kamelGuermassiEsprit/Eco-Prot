const Formation = require("../model/formation");
const Event =require("../model/formation");



// Create a new formation


async function add(req, res, next) {
  try {
    console.log("body :" + JSON.stringify(req.body));
    const formation = new Formation(req.body);
    await event.save();
    res.send("formation add");
  } catch (err) {
    console.log(err);
  }
}




// Get all formations


async function getFormations(req, res,next){
  try {
    const formations = await Formation.find();
    res.json(formations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get a single formation by ID


async function getFormationtById(req, res,next){
  try {
    const formation = await Formation.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.json(formation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Update an formation by ID

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



// Delete an formation by ID
async function deleteFormationById(req, res,next){
  try {
    const formation = await Formation.findByIdAndDelete(req.params.id);
    if (!formation) {
      return res.status(404).json({ error: 'Formation not found' });
    }
    res.json({ message: 'Formation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { add, getFormations, getFormationtById,updateFormationById,deleteFormationById };