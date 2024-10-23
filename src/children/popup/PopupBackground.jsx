import React from 'react'

export const PopupBackground = ({ children ,maxH }) => {
  return (
    <div className={` fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}>
      <div className={`${maxH} w-fit  bg-gray-200 overflow-y-scroll  rounded-2xl py-6 px-12 `}>
        {children}
      </div>
    </div>
  )
}
