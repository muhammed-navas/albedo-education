import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import StarRating from '../star/Star';
import { Button } from './Button';

export const SingleBox = ({title,name,more,color,grid,btn,checkSubTitle,raiting,img}) => {

  return (
    <div className="space-y-4 cursor-pointer">
      <div
        className={`flex items-center  rounded-lg  ${grid === '1'? ' bg-white rounded-xl p-4':'p-0'} transition-colors duration-200 `}
      >
        <div className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full ${color}`}>
      {img? <img src={img} alt={name} className='h-8 w-8 object-cover rounded-full'/> : <CgProfile /> }  
        </div>
        <div className="flex-grow ">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">{title}</span> 
          </p>
          <p className="text-xs text-gray-500">{name}</p>
          {checkSubTitle.toLowerCase() === 'feedbacks' &&  <StarRating rating={raiting} /> }
         
          <div className='flex justify-between items-center'>
          <p className="text-xs text-gray-500 ">{more}</p>
      { grid === '2' && btn &&  <Button title={btn} grid={grid} /> }
          </div>
        </div>
      </div>
  </div>
  )
}
