type Props = { sender: "user" | "bot"; text: string };

export default function MessageBubble({ sender, text }: Props) {
  const align = sender === "user" ? "justify-end" : "justify-start";
  const color = sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black";

  return (
    <div className={`flex ${align}`}>
      <div className={`p-3 rounded-xl max-w-xs ${color}`}>{text}</div>
    </div>
  );
}
