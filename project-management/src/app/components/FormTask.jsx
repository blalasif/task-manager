"use client";
import { useState } from "react";
import { addTaskToProject } from "../services/taskService";
import toast, { Toaster } from "react-hot-toast";

export default function FormTask({ selectedProject, onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProject) {
      toast.error("Please select a project first");
      return;
    }

    setLoading(true);
    try {
      const newTask = await addTaskToProject(selectedProject._id, {
        title,
        description,
        status,
      });

      onTaskAdded(newTask); // Update parent state
      setTitle("");
      setDescription("");
      setStatus("pending");

      toast.success("Task added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
      <Toaster position="top-right" />
      <input
        required
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        required
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        required
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
