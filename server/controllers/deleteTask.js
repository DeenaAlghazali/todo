const Task = require('../models/Task');

const deleteTaskById = async (req, res) => {
    const getTask = await Task.findOne({ _id: req?.body?.id});

    if(getTask) {
        await Task.deleteOne({ _id: req?.body?.id});
        return res.status(202).json({
            message: "task deleted successfully"
        });
    }   else {
        return res.status(400).json({ 
            message: "Bad request task doesn't exist"
        });
    }
   
};

module.exports = deleteTaskById;