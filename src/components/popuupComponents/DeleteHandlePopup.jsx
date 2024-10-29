import React from 'react'
import { FiX } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { Close } from '../component/Close'
import { useMyContext } from '../../context/MyContext'

export const DeleteHandlePopup = () => {
    const {setDeleteHandle} = useMyContext();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
    <div className="relative bg-white rounded-3xl max-w-sm w-full p-6">
      {/* Close button */}
      <button className="absolute right-4 top-4 ">
      <Close closeHandle={setDeleteHandle} />
      </button>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-purple-100 p-3 rounded-xl">
          <BsTrash className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Are you sure?
        </h2>
        <p className="text-gray-600">
          Are you sure you want this package permanently?
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors">
          No
        </button>
        <button className="flex-1 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">
          Yes
        </button>
      </div>
    </div>
  </div>
  )
}



