const Task = require('../models/Task');

const deleteAllTasks = async(req, res) => {
  try {
    const deleteResult = await Task.deleteMany({});
    if(deleteResult.deletedCount == 0) {
      return res.status(404).json({ message: 'No tasks found to delete' });
    }
    return res.status(202).json({
      message: `deleted ${deleteResult.deletedCount} tasks successfully`
    });
  } catch(err) {
      console.log(err);
      return res.status(500).json({ message: 'Failed to delete tasks' });
  }
}

module.exports = deleteAllTasks;