'use client';
import { useEffect, useState } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import FormTask from './components/FormTask';
import TaskList from './components/TaskList';
import SelectFilter from './components/SelectFilter';
import { createProject, getProjects } from './services/projectService';
import { getTasksByProject, getTasksByStatus } from './services/taskService';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  // Fetch tasks when a project is selected
  // useEffect(() => {
  //   if (!selectedProject) {
  //     setTasks([]);
  //     return;
  //   }

  //   fetchTasks(selectedProject._id, filter);
  // }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      setTasks([]);
      return;
    }
    fetchTasks(selectedProject._id, filter);
  }, [selectedProject, filter]);

  // Fetch tasks whenever filter changes
  useEffect(() => {
    if (selectedProject) {
      fetchTasks(selectedProject._id, filter);
    }
  }, [filter, selectedProject]);

  const fetchTasks = async (projectId, statusFilter = '') => {
    try {
      let data = [];
      if (statusFilter) {
        // pass both projectId and statusFilter
        data = await getTasksByStatus(statusFilter, projectId);
      } else {
        data = await getTasksByProject(projectId);
      }
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setTasks([]);
    }
  };

  const handleProjectCreate = async (project) => {
    try {
      const newProject = await createProject(project);
      setProjects([...projects, newProject]);
    } catch (err) {
      console.error('Error creating project:', err);
    }
  };

  // const handleTaskCreate = (task) => {
  //   setTasks([...tasks, task]);
  // };

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 min-h-screen bg-gray-100">
      {/* Projects Section */}
      <div className="md:w-1/3 bg-gray-50 p-6 rounded-xl shadow-md flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Projects Created By Bilal bhatti for demo
        </h2>
        <ProjectForm onSubmit={handleProjectCreate} />
        <ProjectList
          projects={projects}
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
        />
      </div>

      {/* Tasks Section */}
      <div className="md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-md flex flex-col gap-6">
        {selectedProject ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800">
              Tasks for: {selectedProject.name}
            </h2>

            <FormTask
              selectedProject={selectedProject}
              onTaskAdded={(task) => setTasks([...tasks, task])}
            />

            <SelectFilter filter={filter} setFilter={setFilter} />
            <TaskList tasks={tasks} />
          </>
        ) : (
          <p className="text-gray-500 text-center mt-10">Select a project to see tasks.</p>
        )}
      </div>
    </div>
  );
}
