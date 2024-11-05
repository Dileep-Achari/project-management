// controllers/taskController.js
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const { title, description, status, assignedTo, dueDate, project } = req.body;
    try {
        const task = await Task.create({ title, description, status, assignedTo, dueDate, project });
        res.json(task);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId }).populate('assignedTo');
        res.json(tasks);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
