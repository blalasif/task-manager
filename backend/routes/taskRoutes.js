const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Query tasks by status
router.post("/projects/:id", taskController.addTaskToProject);
router.get("/projects/:id", taskController.getTasksByProject);
router.get("/tasks/:id", taskController.getTasksByStatusController);

module.exports = router;
