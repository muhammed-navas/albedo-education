import React, { useState } from 'react'
import { TableFieldItems, TableMainBox, TableNavigationBar, TableStudentsData } from '../../children/table/MainTableBox'
import { AddButton, ButtonStatus } from '../../components/component/Button'
import { PersonData } from '../../components/component/PersonData'
import teacher from '../../../public/teacher.png'

export const Teacher = () => {

  return (
    <TableMainBox>
         <TableNavigationBar values={["Online Tuition","Offline Tuition","Home Tuition",]} />
         <TableFieldItems title={["Teacher Code","Teachers","Raiting","Contact","Available For"]} />
         <TableStudentsData w='w-full' >
                   <h4>ALB/45039</h4>
                   <PersonData img={teacher} name='Teacher' more='student@gmail.com' />
                   <PersonData img={teacher} name='Teacher' more='ALT/4050' />
                   <h4>+91 0987654321</h4>
                   <ButtonStatus title='Join class' textColor='text-white' bgColor='bg-blue-400' />
               </TableStudentsData>
               <AddButton  />
    </TableMainBox>
  )
}
