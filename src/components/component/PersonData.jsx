import React from 'react'

export const PersonData = ({img,name,more}) => {
  return (
    <div className='flex items-center gap-2'>
        <img src={img} className='w-10 object-cover h-10 rounded-lg' alt={name} />
        <div className='max-w-[80px]'>
            <h2 className='text-bold text-sm'>{name}</h2>
            <h6 className='text-xs text-gray-700 '>{more}</h6>
        </div>
    </div>
  )
}
