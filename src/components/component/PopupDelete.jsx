import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMyContext } from '../../context/MyContext';

export const PopupDelete = () => {
    const {setDeleteHandle} = useMyContext();
  return (
    <div onClick={()=>setDeleteHandle(true)}  className='p-2 rounded-full bg-orange-700 w-fit  cursor-pointer'>
        <RiDeleteBin6Line className='h-6 w-6 text-white' />
    </div>
  )
}
