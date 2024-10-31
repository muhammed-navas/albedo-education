import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMyContext } from '../../context/MyContext';

export const PopupDelete = ({w ='w-6',h ='h-6'}) => {
    const {setDeleteHandle} = useMyContext();
  return (
    <div onClick={()=>setDeleteHandle(true)}  className='p-2 rounded-full bg-orange-700 w-fit  cursor-pointer'>
        <RiDeleteBin6Line className={`${w} ${h} text-white`} />
    </div>
  )
}
