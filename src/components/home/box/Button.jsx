import React from 'react'

export const Button = ({title,grid}) => {
  return (
    <button className={` w-fit  rounded-xl  ${grid === '1' ? 'px-4 py-2 text-[14px]' : 'px-2 py-1 text-[10px] '}  bg-purple-200 font-normal`}>
    {title} 
  </button>
  
  ) 
}
