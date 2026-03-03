export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
    >
      {children}
    </button>
  );
}