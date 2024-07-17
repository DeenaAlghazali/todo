const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        details: {
            type: String,
            require: false
        },
        status: {
            type: String, // done, inprogress, todo
            default: 'TODO'
        },
        date: {
            type: String,
            require: true
        },
    },
    { 
        id: true 
    },
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;