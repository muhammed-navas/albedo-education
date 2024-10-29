import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const CurrentStatus = ({textSize = 'text-xs',w = 'w-20',gap='gap-3',px='px-3',py='py-2'}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const status = [
    {
      bg: "bg-green-600",
      text: "Approved",
    },
    {
      bg: "bg-orange-500",
      text: "Declined",
    },
    {
      bg: "bg-gray-500",
      text: "Pending",
    },
  ];

  const handlePrev = () => {
    // Go to the previous status, looping to the last if at the start
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? status.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    // Go to the next status, looping to the start if at the end
    setCurrentIndex((prevIndex) => (prevIndex === status.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`${status[currentIndex].bg} ${gap} ${px} ${py}  flex justify-between rounded-lg  items-center`}>
      <IoIosArrowBack onClick={handlePrev} className="cursor-pointer text-white" />
      <h1 className={`${textSize} text-white ${w} text-center`}>{status[currentIndex].text}</h1>
      <IoIosArrowForward onClick={handleNext} className="cursor-pointer text-white" />
    </div>
  );
};
