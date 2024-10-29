import React from 'react'

export const PersonalDetailsLeftSide = ({items ,initial,setInitial }) => {

  return (
    <div className=" w-[200px]  ">
    {items.map((item,i)=>
    <div onClick={()=>setInitial(i)} key={i} className={`p-2 cursor-pointer ${initial === i ? "bg-cyan-800 text-white":""}  rounded-xl  duration-500 `}>
      <h5 className="text-base font-semibold ">{item}</h5>
    </div>
    )}
  </div>
  )
}
