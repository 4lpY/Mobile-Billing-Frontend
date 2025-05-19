import { useState } from "react";

export default function ChatBox({ onSend }: { onSend: (msg: string) => void }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        className="flex-1 border p-2 rounded"
        placeholder="Write something"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}
