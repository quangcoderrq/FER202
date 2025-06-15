import { useState } from "react";

export default function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const items = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry",
    "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
    "Mango", "Orange", "Papaya", "Quince", "Raspberry",
    "Strawberry", "Tangerine", "Watermelon"
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Search Filter
        </h1>
        
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search fruits..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {filteredItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No items found matching "{searchQuery}"
            </p>
          ) : (
            filteredItems.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-800">{item}</span>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-4 text-sm text-gray-600 text-center">
          Showing {filteredItems.length} of {items.length} items
        </div>
      </div>
    </div>
  );
}