import React from 'react'

export const PopupBackground = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
