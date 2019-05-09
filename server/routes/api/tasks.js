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
    name: req.body.name,
    description: req.body.name,
  });
  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => console.log(err));
});

router.get('/myTasks', (req, res) => {
  // Form validation
  // Find tasks by specific user

  Task.find({ userID: req.query.userID })
    .then(tasks => res.json(tasks))
    .catch(err => console.log(err));
});

router.get('/removeTask', (req, res) => {
  Task.deleteOne({ _id: req.query.id })
    .then(tasks => res.json(tasks))
    .catch(err => console.log(err));
});

module.exports = router;
