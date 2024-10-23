import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";


export const Button = ({title,bgColor , textColor , hover}) => {
    return (
      <button className={`px-4 py-1 duration-500 rounded-full cursor-pointer ${hover} ${bgColor} ${textColor} `}>{title}</button>
    )
  }

export const ButtonStatus = ({title,bgColor , textColor , hover}) => {
    return (
      <button className={`px-4 py-1 duration-500 rounded-full text-xs cursor-pointer ${hover} ${bgColor} ${textColor} `}>{title}</button>
    )
  }

export const AddButton = ({bgColor , textColor , hover ,onClick}) => {
    const [ hoverEffect , setHoverEffect] = useState(false)
    return (
      <button onClick={onClick} onMouseEnter={()=>setHoverEffect(true)} onMouseLeave={()=>setHoverEffect(!hoverEffect)} className={`p-2 duration-500 bg-fuchsia-900  rounded-2xl absolute bottom-4 right-4 flex items-center text-white  cursor-pointer ${hover} ${bgColor} ${textColor} `}>
        <IoAddOutline className="lg:w-8 lg:h-8 w-4 h-4 duration-500 text-white" />
        {hoverEffect && <span className="duration-500"> Add</span> }
        
      </button>
    )
  }