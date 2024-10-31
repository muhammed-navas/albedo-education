import React from 'react'

export const ResponsiveGrid = ({ normal=1, md=1 , lg=1 , children }) => {
    return (
      <div
        className={`grid lg:${lg} ${normal}` }
      >
        {children}
      </div>
    )
  }

  export const FlexAndJustifyCenterAndItemsCenter = ({children}) =>{
    return (
      <div className='flex justify-between items-center gap-4 py-2'>{children}</div>
    )
  }