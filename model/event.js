

const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  startdate: {
    type: Date,
    required: true,
  },
  
  enddate: {
    type: Date,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  organizer: {
    type: String,
    required: true,
  },
 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


