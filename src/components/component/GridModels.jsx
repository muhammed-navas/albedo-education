import React from 'react'

export const GridTitleAndImageAndNameAndMore = ({title,name,general}) => {
  return (
    <div>
        <h1 className='text-lg text-gray-500'>{title}</h1>
        <div className='flex items-center gap-4'>
            <img className='h-10 w-10 object-cover rounded-lg' src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800" alt={name} />
            <div>
                <h1 className='text-base'>{name}</h1>
                <p className='text-xs text-gray-500'>{general}</p>
            </div>
        </div>
    </div>
  )
}
