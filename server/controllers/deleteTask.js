const Task = require('../models/Task');

const deleteTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if(!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.json({
            message: 'Task deleted successfully',
            deletedTask: deletedTask
        });
  
    } catch (err) {
      console.error('Error deleting task:', err);
      return res.status(500).json({ message: 'Failed to delete task' });
    }
};

module.exports = deleteTaskById;