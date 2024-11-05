// controllers/projectController.js
const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    const { name, description } = req.body;
    try {
        const project = await Project.create({ name, description, owner: req.user.id });
        res.json(project);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.user.id }).populate('teamMembers');
        res.json(projects);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
