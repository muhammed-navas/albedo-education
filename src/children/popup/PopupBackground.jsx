import React from 'react'

export const PopupBackground = ({ children ,maxH ,width }) => {
  return (
    <div className={` fixed inset-0 flex items-center justify-center  bg-gray-800 bg-opacity-50`}>
      <div className={`${maxH} ${width}  bg-gray-200 overflow-y-scroll  rounded-2xl py-16 px-20 `}>
        {children}
      </div>
    </div>
  )
}
