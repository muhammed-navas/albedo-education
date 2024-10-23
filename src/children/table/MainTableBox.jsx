import { useState } from "react"

export const TableMainBox = ({children}) => {
  return (
    <div className="bg-gray-200 max-w-5xl relative  m-auto lg:px-16 px-6 py-4 lg:py-10 rounded-2xl ">
       {children}
    </div>
  )
}
export const TableNavigationBar = ({values}) => {
    const [barClick, setBarClick] = useState(0)
  return (
    <div className='bg-gray-300 p-2 flex gap-4 overflow-x-scroll lg:overflow-auto justify-around rounded-2xl'>
    {values.map((item,index)=>
      <div key={index} className={`${barClick === index?'bg-white':''} duration-700 px-16 py-2 rounded-xl`}>
          <button onClick={()=>setBarClick(index)} >{item}</button>
      </div>
    )}
  </div>
  )
}

export const TableFieldItems = ({title}) => {
    return (
      <div className="my-4">
          <div className="bg-blue-200 flex justify-around py-3 rounded-xl gap-4 lg:gap-0 overflow-x-scroll lg:overflow-x-auto">
              {title.map((item,i)=>
                  <h4 key={i}>{item}</h4>
              )}
          </div>
      </div>
    )
  }
  export const TableStudentsDataWithEdit = ({children}) => {
    return (
      <div className="flex items-center gap-4 my-2 overflow-x-scroll lg:overflow-x-auto ">
         {children}
      </div>
    )
  }
  export const TableStudentsData = ({children}) => {
    return (
      <div className="bg-white rounded-xl cursor-pointer w-full lg:w-[87%] py-3 px-4 gap-4 flex justify-between items-center  ">
         {children}
      </div>
    )
  }
