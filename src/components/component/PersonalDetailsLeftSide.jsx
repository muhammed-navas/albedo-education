import React from 'react'

export const PersonalDetailsLeftSide = ({items}) => {
  return (
    <div className=" bg-gray-100 p-8 rounded-tl-2xl rounded-bl-2xl">
    {items.map((item,i)=>
    <div key={i} className="p-2 cursor-pointer hover:bg-cyan-800 rounded-xl hover:text-white duration-500 ">
      <h5 className="text-lg font-semibold ">{item}</h5>
    </div>
    )}
  </div>
  )
}
