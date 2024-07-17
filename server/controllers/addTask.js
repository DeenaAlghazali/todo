const Task = require("../models/Task");

const addTask = async ({ body }) => {
  const todo = new Task({
    title: body?.title,
    details: body?.details,
    data: body?.date
  });
  await todo.save();
};

module.exports = addTask;
