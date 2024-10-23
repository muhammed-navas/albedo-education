import React from 'react'

export const Input = ({type,placeholder}) => {
  return (
    <div className='bg-gray-300 px-6 py-2 rounded-full'>
        <input className='outline-none bg-transparent text-sm ' type={type} placeholder={placeholder} />
    </div>
  )
}
