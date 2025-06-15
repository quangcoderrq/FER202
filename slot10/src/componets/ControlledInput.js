import { useState } from "react";

export default function ControlledInput() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Controlled Input Field
        </h1>
        <div className="mb-4">
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="p-4 bg-gray-50 rounded-md min-h-16">
          <p className="text-gray-700 text-lg">
            {text || "Start typing to see text appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
}