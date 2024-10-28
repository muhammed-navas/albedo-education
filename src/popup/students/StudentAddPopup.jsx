import React, { useState } from 'react'
import { PopupBackground } from '../../children/popup/PopupBackground'
import { ResponsiveGrid } from '../../children/styleReuse/Style'
import { Input } from '../../components/component/Input'
import { UploadedImage } from '../../components/component/UploadImage'
import { IoCloseCircleOutline } from "react-icons/io5";
import { Button } from '../../components/component/Button'

export const StudentAddPopup = ({setShowPopup}) => {
  const [selectMode ,setSelectMode ] = useState(0)
  return (
    <PopupBackground maxH='max-h-[35rem]' >
        {/* <ResponsiveGrid lg="grid-cols-2" normal="grid-cols-1" > */}
        <div className='flex justify-between items-center'>
        <h3 className='text-sm font-bold text-start py-2'>Add New Student</h3>
        <IoCloseCircleOutline onClick={()=>setShowPopup(false)} className='w-7 h-7 cursor-pointer' />
        </div>
        <UploadedImage />
        <div className='py-4 flex '>
          <div className='mr-4'>
          <input type="checkbox" /> Package
          </div>
          <input type="checkbox" /> RePackage
        </div>
            <div className='grid grid-cols-2 gap-12 pb-4'>

        <Input type='text ' placeholder='Name' />
        <Input type='text' placeholder='Email' />
        <Input type='text' placeholder='Phone NO' />
        <Input type='text' placeholder='Whatsapp NO' />
        <Input type='text' placeholder='Parant Name' />
        <Input type='text' placeholder='Parant Occupation' />
        <Input type='text' placeholder='Place' />
        <Input type='text' placeholder='Pin code' />
        <Input type='text' placeholder='Address' />
        <Input type='text' placeholder='Time Zone' />
        </div>
        <div className='flex flex-col justify-center items-center'>
        <h6 htmlFor="select mode  " className='py-1 text-start'>Select Mode</h6>
        <div className='px-3 py-2 w-fit  bg-gray-300 rounded-full flex gap-4 my-4 items-center justify-center'>
          {["Online Tutuion","Offline Tutuion","Home Tutuion"].map((item,i)=>
          <div onClick={() => setSelectMode(i)}  className={`${selectMode === i ? 'bg-blue-400 text-white':'bg-white'} rounded-full px-5 py-1 cursor-pointer`} key={i}>
            {item}
          </div>
          )}
        </div>
        </div>
        <Input type='text' placeholder='Advicer' w='w-full' />
            <div className='flex justify-between gap-4 my-6'>
              <div>
              <input type="checkbox" /> Register Fee

              </div>
              <div className='flex gap-4 items-center'>

              <Button title='close' bgColor='bg-gray-300' />
              <Button title='Add' bgColor='bg-blue-400 text-white' />
              </div>
            
            </div>
        {/* </ResponsiveGrid> */}
    </PopupBackground>
  )
}
