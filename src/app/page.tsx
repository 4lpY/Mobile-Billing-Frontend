"use client"
import { useState } from "react";
import ChatBox from "@/components/ChatBox";
import MessageBubble from "@/components/MessageBubble";

type Message = { sender: "user" | "bot"; text: string };

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    setMessages(prev => [...prev, { sender: "user", text }]);
    setLoading(true);

    const res = await fetch("/api/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const reply = await res.text();
    setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🧾 AI Billing Assistant</h1>
      <div className="space-y-2 mb-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        {loading && <MessageBubble sender="bot" text="..." />}
      </div>
      <ChatBox onSend={handleSend} />
    </div>
  );
}
