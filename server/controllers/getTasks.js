const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
    const tasks = await Task.find();

    return res.status(200).json({
        data: tasks
    });

    }catch(err) {
        console.log(err);
        return res.status(500).json({ message: 'Failed to fetch tasks' });
    };
};

module.exports = getAllTasks;