const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const TimesheetSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// eslint-disable-next-line no-multi-assign, no-undef
module.exports = Task = mongoose.model('timesheet', TimesheetSchema);
