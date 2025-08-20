"use client";

export default function TaskList({ tasks }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task, idx) => (
          <div key={idx} className="border p-3 rounded shadow-sm">
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 rounded text-white text-sm ${
                task.status === "done"
                  ? "bg-green-500"
                  : task.status === "in-progress"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }`}
            >
              {task.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
