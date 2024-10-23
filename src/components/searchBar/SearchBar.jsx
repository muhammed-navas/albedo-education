import { useState } from 'react';
import { Button } from "../component/Button";
import { Filter } from "../component/Filter";
import { GridOrList } from "../component/GridOrList";
import { Search } from "../component/Search";
import { FaBars } from 'react-icons/fa'; // Example dropdown icon for mobile

export const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-5xl m-auto py-4">
      <div className="flex justify-between items-center h-20 w-full">
        <div>
          <h1 className="text-2xl text-gray-700">Session</h1>
        </div>
        
        {/* Desktop and Tablet View */}
        <div className="hidden md:flex items-center gap-4">
          <Search />
          <Button title="Feedback" hover='hover:bg-blue-500' bgColor="bg-blue-600" textColor="text-white" />
          <GridOrList />
          <Filter />
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative flex justify-between gap-4 px-4">
            <Search />
          <button
            onClick={toggleDropdown}
            className="text-gray-700 focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-2  top-16 flex flex-col  items-start bg-white rounded-lg shadow-lg p-4 space-y-4 z-50">
              <Button title="Feedback" bgColor="bg-blue-600" textColor="text-white" />
              <GridOrList />
              <Filter />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
