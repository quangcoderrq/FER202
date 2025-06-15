import { useState } from "react";

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Toggle Visibility</h1>
        
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-colors duration-200"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        
        {isVisible && (
          <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-md">
            <p className="text-gray-800 text-lg">
              This is the hidden text that appears when you click Show!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}