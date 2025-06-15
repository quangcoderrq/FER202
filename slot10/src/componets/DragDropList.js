import { useState } from "react";

export default function DragDropList() {
  const [items, setItems] = useState([
    "Task 1: Learn React",
    "Task 2: Practice useState",
    "Task 3: Build Components",
    "Task 4: Master Hooks",
    "Task 5: Create Projects"
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, dropIndex) => {
    event.preventDefault();
    
    if (draggingItem === null) return;
    
    const newItems = [...items];
    const draggedItem = newItems[draggingItem];
    
    // Remove the dragged item from its original position
    newItems.splice(draggingItem, 1);
    
    // Insert the dragged item at the new position
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Drag and Drop List
        </h1>
        
        <p className="text-sm text-gray-600 mb-4 text-center">
          Drag and drop items to reorder the list
        </p>

        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={item}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, index)}
              className={`p-4 rounded-md cursor-move border-2 transition-all duration-200 ${
                draggingItem === index
                  ? "bg-blue-100 border-blue-300 opacity-50"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <div className="flex flex-col mr-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-gray-800 select-none">{item}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          💡 Click and drag any item to reorder
        </div>
      </div>
    </div>
  );
}