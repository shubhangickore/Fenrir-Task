export default function SeverityBadge({ level, count }) {
  const colors = {
    Critical: "bg-red-600 text-white",
    High: "bg-orange-500 text-white",
    Medium: "bg-yellow-400 text-black",
    Low: "bg-green-400 text-black",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs ${colors[level]}`}>
      {level}: {count}
    </span>
  );
}