
const Event =require("../model/event");






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







async function getEvents(req, res,next){
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};






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








async function addeventsocket(data) {
  try {
   // data.date = new Date(data.date);
    const event = new Event({
      nom: data.nom,
      category: data.category,
      startdate: data.startdate,
      enddate:data.enddate,
      location: data.location,
      organizer:data.organizer,
    
    });
  
  
    
    console.log("Event data: " + JSON.stringify(data));
  
  
    await event.save();
  
    console.log("Event saved successfully");
  } catch (err) {
    console.error(err);
  }
}





async function Affichersocket() {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    console.error(error);
    return [];
  }
}


module.exports = { add, getEvents, getEventById,updateEventById,deleteEventById,addeventsocket,Affichersocket};