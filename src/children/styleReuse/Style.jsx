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
