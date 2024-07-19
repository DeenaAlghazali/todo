const Task = require("../models/Task");

const addTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body?.title,
      details: req.body?.details,
      date: req.body?.date
    });
    await task.save();
    return res.json({
      message: 'Task added successfully'
    });
  } catch(err) {
      console.log(err);
      return res.status(500).json({ message: 'Failed to add task' });
    }
};

module.exports = addTask;
