const Task = require('../models/Task');

const deleteAllTasks = async(req, res) => {
    await Task.deleteMany({});
    return res.status(202).json({
        message: "All tasks deleted successfully"
    });
}

module.exports = deleteAllTasks;