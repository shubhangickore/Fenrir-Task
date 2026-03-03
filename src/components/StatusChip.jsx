export default function StatusChip({ status }) {
  const colors = {
    Completed: "bg-green-500 text-white",
    Scheduled: "bg-gray-500 text-white",
    Failed: "bg-red-500 text-white",
    Running: "bg-blue-500 text-white",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs ${colors[status]}`}>
      {status}
    </span>
  );
}