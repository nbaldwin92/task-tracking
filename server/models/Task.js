const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const TaskSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// eslint-disable-next-line no-multi-assign, no-undef
module.exports = Task = mongoose.model('tasks', TaskSchema);
