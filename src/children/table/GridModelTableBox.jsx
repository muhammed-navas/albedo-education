import React from 'react'

export const GridModelTableBox = ({children}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4'>
            {children}
    </div>
  )
}

