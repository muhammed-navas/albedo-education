import React from 'react'

export const PersonalDetailsLeftAndRightSide = ({children }) => {
  return (
    // <div  className=" bg-white  absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 rounded-2xl">
    //         {children}
    // </div>
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className="relative bg-white rounded-2xl">
        {children}
      </div>
    </div>
  )
}
