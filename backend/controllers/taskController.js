const taskService = require("../services/taskService");

const addTaskToProject = async (req, res) => {
  try {
    const task = await taskService.addTaskToProject(req.params.id, req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getTasksByProject = async (req, res) => {
  try {
    const tasks = await taskService.getTasksByProject(req.params.id);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTasksByStatusController = async (req, res) => {
  try {
    const { status } = req.query;
    const projectId = req.params.id;
    const tasks = await taskService.getTasksByStatus(status, projectId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addTaskToProject,
  getTasksByProject,
  getTasksByStatusController,
};
