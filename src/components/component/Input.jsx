import React from 'react'

export const Input = ({type,placeholder,w = 'w-80'}) => {
  return (
    <div className={`bg-gray-300 px-8 py-4 rounded-full ${w}`}>
        <input className='outline-none bg-transparent text-sm ' type={type} placeholder={placeholder} />
    </div>
  )
}
