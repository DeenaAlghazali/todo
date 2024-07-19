const Task = require("../models/Task");

const editTask = async (req, res) => {
  const taskId = req.params.id;
  try {

    const task = await Task.findById(taskId);
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = req.body.title || task.title;
    task.details = req.body.details || task.details;
    task.date = req.body.date || task.date;
    task.status = req.body.status || task.status; 

    await task.save();

    return res.json({
      message: 'Task updated successfully',
      task: task
    });

  } catch (err) {
    console.error('Error editing task:', err);
    return res.status(500).json({ message: 'Failed to edit task' });
  }
};

module.exports = editTask;
