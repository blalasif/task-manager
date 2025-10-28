'use client';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ProjectForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
    toast.success('Project Created Successfully');
    setName('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 shadow-sm rounded-xl p-6 w-full max-w-md mx-auto flex flex-col gap-5"
    >
      <Toaster position="top-right" />
      <h2 className="text-xl font-semibold text-gray-800">Create New Project</h2>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1 font-medium">Project Name</label>
        <input
          required
          type="text"
          placeholder="Enter project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1 font-medium">Description</label>
        <textarea
          required
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 h-24 focus:ring-2 focus:ring-blue-300 focus:outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition"
      >
        HI Create Project
      </button>
    </form>
  );
}
