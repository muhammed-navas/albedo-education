import React from 'react'
import { PopupBackground } from '../children/popup/PopupBackground'
import { ResponsiveGrid } from '../children/styleReuse/Style'
import { Input } from '../components/component/Input'

export const StudentAddPopup = () => {
  return (
    <PopupBackground >
        {/* <ResponsiveGrid lg="grid-cols-2" normal="grid-cols-1" > */}
            <div className='grid grid-cols-2 gap-6'>

        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
        <Input type='text' placeholder='first name' />
            </div>
        {/* </ResponsiveGrid> */}
    </PopupBackground>
  )
}
