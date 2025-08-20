"use client";

export default function SelectFilter({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded mb-2"
    >
      <option value="">All</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
    </select>
  );
}
