const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  instructor: {
    type: String,
    required: true,
  },
});

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;