"use client";

export default function ProjectList({
  projects,
  selectedProject,
  onSelectProject,
}) {
  return (
    <ul className="flex flex-col gap-2">
      {projects.map((project, idx) => (
        <li
          key={idx}
          className={`p-2 rounded cursor-pointer border ${
            selectedProject === project
              ? "bg-blue-100 border-blue-500"
              : "hover:bg-gray-100"
          }`}
          onClick={() => onSelectProject(project)}
        >
          {project.name}
        </li>
      ))}
    </ul>
  );
}
