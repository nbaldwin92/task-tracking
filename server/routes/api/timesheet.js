const express = require('express');

const router = express.Router();

// Load User model
const Timesheet = require('../../models/Timesheet');

// @route POST api/tasks/newTask
// @desc Register user
// @access Public
router.post('/newpunch', (req, res) => {
  // Form validation

  const newPunch = new Timesheet({
    userID: req.body.userID,
    type: req.body.type,
  });
  newPunch
    .save()
    .then(task => res.json(task))
    .catch(err => console.log(err));
});

module.exports = router;
