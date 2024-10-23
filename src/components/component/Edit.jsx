import React from 'react'
import { BiSolidEdit } from "react-icons/bi";

export const Edit = ({width,height}) => {
  return (
    <div className="bg-white p-2 rounded-lg cursor-pointer">
        <BiSolidEdit className={`${width} ${height}`} />
    </div>
  )
}
