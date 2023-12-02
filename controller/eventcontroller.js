
const Event =require("../model/event");



// Create a new event


async function add(req, res, next) {
  try {
    console.log("body :" + JSON.stringify(req.body));
    const event = new Event(req.body);
    await event.save();
    res.send("event add");
  } catch (err) {
    console.log(err);
  }
}




// Get all events


async function getEvents(req, res,next){
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get a single event by ID


async function getEventById(req, res,next){
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Update an event by ID

async function updateEventById(req, res,next){
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// Delete an event by ID
async function deleteEventById(req, res,next){
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { add, getEvents, getEventById,updateEventById,deleteEventById };