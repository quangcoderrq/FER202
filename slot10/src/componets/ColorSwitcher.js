import { useState } from "react";

export default function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState("white");

  const colors = [
    { name: "White", value: "white" },
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "yellow" },
    { name: "Purple", value: "purple" },
    { name: "Orange", value: "orange" }
  ];

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Color Switcher
        </h1>
        
        <div className="mb-6">
          <label htmlFor="colorSelect" className="block text-sm font-medium text-gray-700 mb-2">
            Select a color:
          </label>
          <select
            id="colorSelect"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {colors.map(color => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </div>

        <div 
          className="w-64 h-32 border-2 border-gray-300 rounded-md flex items-center justify-center text-gray-800 font-semibold transition-colors duration-300"
          style={{ backgroundColor: selectedColor }}
        >
          Background Color: {selectedColor}
        </div>
      </div>
    </div>
  );
}