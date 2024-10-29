import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Subject = ({ languages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? languages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div>
        <h2 className="text-center">2ND STD</h2>
        <div className="flex items-center space-x-2">
          <FaChevronLeft
            className="w-4 h-4 cursor-pointer text-gray-600 hover:text-black"
            onClick={handlePrev}
          />
          <p className=" w-16 font-bold text-sm text-center">{languages[currentIndex]}</p>
          <FaChevronRight
            className="w-4 h-4 cursor-pointer text-gray-600 hover:text-black"
            onClick={handleNext}
          />
        </div>
        <h2 className="text-center">CBSE</h2>
      </div>
    </div>
  );
};
