const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const taskController = require("../controllers/taskController");

// Project routes
router.post("/projects", projectController.createProject);
router.get("/projects", projectController.getProjects);

// Task routes (nested under project)
router.post("/projects/:id/tasks", taskController.addTaskToProject);
router.get("/projects/:id/tasks", taskController.getTasksByProject);

module.exports = router;
