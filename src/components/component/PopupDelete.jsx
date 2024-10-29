import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

export const PopupDelete = () => {
  return (
    <div  className='p-2 rounded-full bg-orange-700 w-fit  cursor-pointer'>
        <RiDeleteBin6Line className='h-6 w-6 text-white' />
    </div>
  )
}
