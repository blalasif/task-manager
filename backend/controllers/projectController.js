const projectService = require("../services/projectService");

const createProject = async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createProject, getProjects };
