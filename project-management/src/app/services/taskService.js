import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

// Add a task to a specific project
export const addTaskToProject = async (projectId, taskData) => {
  try {
    const response = await axios.post(
      `${API_BASE}/projects/${projectId}/tasks`,
      taskData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const getTasksByStatus = async (status, projectId) => {
  try {
    const response = await axios.get(`${API_BASE}/tasks/${projectId}`, {
      params: { status },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by status:", error);
    throw error;
  }
};

export const getTasksByProject = async (projectId) => {
  try {
    const response = await axios.get(`${API_BASE}/projects/${projectId}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
