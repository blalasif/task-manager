const Task = require("../models/Task");
const Project = require("../models/Project");
const mongoose = require("mongoose");
const addTaskToProject = async (projectId, data) => {
  if (!mongoose.isValidObjectId(projectId)) {
    throw new Error("Invalid project ID format");
  }

  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Project not found. Cannot add task.");
  }

  return await Task.create({ ...data, projectId });
};

const getTasksByProject = async (projectId) => {
  if (!mongoose.isValidObjectId(projectId)) {
    throw new Error("Invalid project ID format");
  }

  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Project not found.");
  }

  const tasks = await Task.find({ projectId });
  if (tasks.length === 0) {
    return { message: "No tasks found for this project." };
  }

  return tasks;
};

const getTasksByStatus = async (status, projectId) => {
  // Convert projectId to ObjectId with 'new' keyword
  const query = { projectId: new mongoose.Types.ObjectId(projectId) };

  // Add status filter if provided
  if (status) {
    query.status = { $regex: new RegExp(`^${status.trim()}$`, "i") };
  }

  console.log("Querying tasks with:", query); // debug
  return await Task.find(query);
};

module.exports = { addTaskToProject, getTasksByProject, getTasksByStatus };
