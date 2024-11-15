"use client"

import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1485853995584-5b4698437ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    moreInfoLink: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488239585740-f5be6038763f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYW5pbmd8ZW58MHx8MHx8fDA%3D",
    moreInfoLink: "#"
  },
]

export default function SlideAd() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-purple-100 to-white">
        <div 
          className="aspect-[16/9] relative bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url(${carouselItems[currentIndex].image})` }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-between p-6">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="z-10 flex  py-2 items-center justify-center rounded-lg bg-gray-100 opacity-45 shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Previous slide"
            >
              <IoIosArrowBack className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="z-10 flex py-2 items-center justify-center rounded-lg bg-gray-100 opacity-45 shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Next slide"
            >
              <IoIosArrowForward className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          {/* More Info Button */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button className="px-4 py-1 bg-white opacity-60 rounded-full shadow-md hover:shadow-lg transition-shadow text-xs font-normal">
              More Info
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                currentIndex === index ? 'w-4 bg-purple-600' : 'bg-purple-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}