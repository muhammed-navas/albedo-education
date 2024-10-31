import React from 'react'

export const Input = ({type,placeholder,w='w-80'}) => {
  return (
    <div className={`bg-gray-100 px-8 py-4 rounded-full ${w}`}>
        <input className='outline-none bg-gray-100 text-sm ' type={type} placeholder={placeholder} />
    </div>
  )
}
