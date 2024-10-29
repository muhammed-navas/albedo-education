import React from 'react'
import { FaUserGraduate, FaClock, FaRupeeSign } from 'react-icons/fa'

export const PackageData = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
      <div className="relative p-6">
        {/* Status Badge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Action Due
        </div>
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-lg font-bold">
            001
          </span>
        </div>

        {/* Main Information */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Maths CBSE</h2>
            <p className="text-gray-600">48263</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Teacher"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-gray-800">Teacher</p>
              <p className="text-gray-600">Saeeda ALB06</p>
            </div>
          </div>
        </div>

        {/* Session Information */}
        <div className="mb-4">
          <p className="text-gray-800 font-semibold">Completed sessions</p>
          <p className="text-blue-600">10 in 600 mins</p>
        </div>

        {/* Tuition Info */}
        <div className="bg-white p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <FaUserGraduate className="text-blue-500 mr-2" />
            <span className="font-semibold text-gray-800">Online Tuition</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-2" />
            <span>8:00 pm, Duration: 60 mins</span>
          </div>
        </div>

        {/* Fee Information */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Fee</span>
            <span className="text-blue-600 font-semibold">
              <FaRupeeSign className="inline mr-1" />
              5,000/hr
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Paid Fee</span>
            <span className="text-green-600 font-semibold">
              <FaRupeeSign className="inline mr-1" />
              5,000
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Balance Fee</span>
            <span className="text-red-600 font-semibold">
              <FaRupeeSign className="inline mr-1" />
              5,000
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const PackageDataSmall = () => {
  return (
    <div className="max-w-sm mx-auto bg-white  rounded-3xl shadow-lg overflow-hidden">
      <div className="relative p-4">
        {/* Status Badge */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 text-white px-4 py-1 rounded-full text-[11px] font-semibold">
          Action Due
        </div> */}
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            001
          </span>
        </div>

        {/* Main Information */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-sm font-semibold text-gray-800">Maths CBSE</h2>
            <p className="text-gray-600 text-xs">48263</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Teacher"
              className="w-7 h-7 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold text-gray-800 text-xs">Teacher</p>
              <p className="text-gray-600  text-xs">Saeeda ALB06</p>
            </div>
          </div>
        </div>

        {/* Session Information */}
        <div className="mb-2">
          <p className="text-gray-800 font-semibold text-xs">Completed sessions</p>
          <p className="text-blue-600 text-xs">10 in 600 mins</p>
        </div>

        {/* Tuition Info */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <FaUserGraduate className="text-blue-500 mr-2" />
            <span className="font-semibold text-gray-800 text-xs">Online Tuition</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-2" />
            <span>8:00 pm, Duration: 60 mins</span>
          </div>
        </div>

        {/* Fee Information */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800 text-xs">Fee</span>
            <span className="text-blue-600 font-semibold text-xs">
              <FaRupeeSign className="inline mr-1" />
              5,000/hr
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600 text-xs">Paid Fee</span>
            <span className="text-green-600 font-semibold text-xs">
              <FaRupeeSign className="inline mr-1" />
              5,000
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Balance Fee</span>
            <span className="text-red-600 font-semibold">
              <FaRupeeSign className="inline mr-1" />
              5,000
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
