import React from 'react'
import { MdOutlineEdit } from "react-icons/md";

export const PopupEdit = ({w='w-6',h='h-6'}) => {
  return (
    <div className='p-2 rounded-full bg-fuchsia-900 w-fit  cursor-pointer'>
        <MdOutlineEdit className={` ${w} ${h} text-white`} />
    </div>
  )
}
