const express = require('express');

const router = express.Router();

// Load User model
const Task = require('../../models/Task');

// @route POST api/tasks/newTask
// @desc Register user
// @access Public
router.post('/newTask', (req, res) => {
  // Form validation

  const newTask = new Task({
    userID: req.body.userID,
    name: req.body.taskName,
    description: req.body.taskDescription,
  });
  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => console.log(err));
});

module.exports = router;
