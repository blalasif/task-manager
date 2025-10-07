import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // replace with your backend URL

// Create a new project
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/projects`, projectData);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating project:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get all projects
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching projects:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get a single project by ID
export const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching project:",
      error.response?.data || error.message
    );
    throw error;
  }
};
