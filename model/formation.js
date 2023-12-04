const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
  pseudo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  startTime: {
    type: Date,
    required: true,
  },

  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },

  
  instructor: {
    type: String,
    required: true,
  },
});

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;