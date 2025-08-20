const Project = require("../models/Project");

const createProject = async (data) => {
  return await Project.create(data);
};

const getProjects = async () => {
  return await Project.find();
};

module.exports = { createProject, getProjects };
