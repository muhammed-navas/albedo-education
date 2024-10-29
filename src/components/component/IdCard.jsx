import React from 'react'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import { PersonalDetailsLeftAndRightSide } from '../../children/popup/PersonalDetailsLeftAndRightSide'
import { Close } from './Close'

export const IdCard = ({ setIdCardHandle }) => {
  return (
    <PersonalDetailsLeftAndRightSide >
      <div className="fixed inset-0  flex items-center justify-center z-[9999]">
        <div className='bg-white p-8 pt-2 border rounded-lg'>
            <Close  closeHandle={setIdCardHandle} />
        <div className="relative w-80 bg-gray-100 border border-gary-300 rounded-2xl shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-purple-600">John Smith</h2>
            <p className="text-gray-600">Student</p>
          </div>

          <div className="text-center text-sm text-gray-500 mb-6">
            <p>Email: sameedsalb@gmail.com</p>
            <p>Emp.id: 2654 Phone no: +91 9524554</p>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300 transition duration-300">
              <FiDownload className="mr-2" />
              Download
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300 transition duration-300">
              <FiShare2 className="mr-2" />
              Share
            </button>
          </div>
        </div>
        </div>
      </div>
    </PersonalDetailsLeftAndRightSide>
  )
}