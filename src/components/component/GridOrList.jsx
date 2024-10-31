import { IoIosMenu } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { useState } from 'react';
import { useMyContext } from "../../context/MyContext";

export const GridOrList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {setGridOrList} = useMyContext()
  return (
    <div className=" flex justify-center items-center bg-white px-3 py-1 rounded-full">
    <button
      onClick={() =>{ setIsOpen(true),setGridOrList(false)}}
      className={` px-2 py-1 rounded-full duration-500 transition-colors ${
        isOpen ? 'bg-blue-200' : 'bg-transparent'
      }`}
    >
      <IoIosMenu className="h-5 w-5" />
    </button>
    <button
      onClick={() =>{ setIsOpen(!isOpen),setGridOrList(true)}}
      className={` px-2 py-1 rounded-full duration-500 transition-colors ${
        isOpen ? 'bg-transparent' : ' bg-blue-200'
      }`}
    >
      <CiGrid41 className="h-5 w-5" />
    </button>
  </div>
  )
}

