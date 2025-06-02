import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const callGeminiAPI = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY", // 🔁 Thay bằng API key thật của bạn
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: input }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";

      const aiMessage = { role: "ai", text: reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "❌ Error: Could not reach Gemini API." },
      ]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-10 border rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">Ask Gemini API</h1>

      <div className="h-64 overflow-y-auto border rounded p-3 bg-gray-50 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg w-fit max-w-full ${
              msg.role === "user"
                ? "ml-auto bg-blue-200 text-right"
                : "mr-auto bg-gray-300 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-grow border p-2 rounded-l"
        />
        <button
          onClick={callGeminiAPI}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
