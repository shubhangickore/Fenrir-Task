import { useState } from "react";

export default function Toast({ message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded">
      {message}
      <button className="ml-2" onClick={() => setVisible(false)}>✖</button>
    </div>
  );
}