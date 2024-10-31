import React from 'react'
import { TableFieldItems, TableMainBox, TableNavigationBar, TableStudentsData } from '../../children/table/MainTableBox'
import { ButtonStatus } from '../../components/component/Button'
import { PersonData } from '../../components/component/PersonData'

export const Mentor = () => {
  return (
    <TableMainBox>
    <TableNavigationBar values={["Ass. Admin A","Ass. Admin B","Ass. Admin C",]} />
    <TableFieldItems title={["Emp id","Mentors","Raiting","Contact","Status"]} />
    <TableStudentsData w='w-full' >
              <h4>ALB/45039</h4>
              <PersonData img={teacher} name='Mentor' more='student@gmail.com' />
              <PersonData img={teacher} name='Teacher' more='ALT/4050' />
              <h4>+91 0987654321</h4>
              <ButtonStatus title='Join class' textColor='text-white' bgColor='bg-blue-400' />
          </TableStudentsData>
          <AddButton addHandle={setShowPopup} />
</TableMainBox>
  )
}
