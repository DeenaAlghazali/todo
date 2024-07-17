const Task = require('../models/Task');

const getTasks = async (req, res) => {
    const getAllTasks = await Task.find();
    res.status(200).json({
        data: getAllTasks
    });
};

module.exports = getTasks;