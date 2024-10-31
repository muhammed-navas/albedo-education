import React, { useState } from 'react'
import { TableFieldItems, TableMainBox, TableNavigationBar, TableStudentsData, TableStudentsDataWithEdit } from '../../children/table/MainTableBox'
import { PersonData } from '../../components/component/PersonData'
import { Edit } from '../../components/component/Edit'
import student from '../../../public/student.png'
import teacher from '../../../public/teacher.png'
import mentor from '../../../public/mentor.png'
import { AddButton, ButtonStatus, ViewButton } from '../../components/component/Button'
import { Subject } from '../../components/component/Subject'
import { StudentAddPopup } from '../../popup/students/StudentAddPopup'
import { StudentsDtailsPopup } from '../../popup/students/StudentsDtailsPopup'
import { GridModelTableBox } from '../../children/table/GridModelTableBox'
import { useMyContext } from '../../context/MyContext'
import { GridTitleAndImageAndNameAndMore } from '../../components/component/GridModels'
import { PopupEdit } from '../../components/component/PopupEdit'
import { FlexAndJustifyCenterAndItemsCenter } from '../../children/styleReuse/Style'

export const Student = () => {
    const [ showPopup,setShowPopup] = useState(false)
    const [ showPopup1,setShowPopup1] = useState(false)
    const {gridOrList} = useMyContext()
  return (
    <TableMainBox >
        <TableNavigationBar values={["Active","Upcoming","Pending","Completed"]} />
        {gridOrList ? (
          <>
            <GridModelTableBox>
          {Array(6).fill(0).map((_,i)=>
            <div className='bg-white p-10 rounded-2xl'>
              <FlexAndJustifyCenterAndItemsCenter>
                <GridTitleAndImageAndNameAndMore title='student' name='alfonodes' general='a@gmail.com' />
                <GridTitleAndImageAndNameAndMore title='Mentor' name='Mentore ' general='872209' />
              </FlexAndJustifyCenterAndItemsCenter>
              <FlexAndJustifyCenterAndItemsCenter>
                <Subject languages={["ENGLISH","MATHS","HINDI"]} />
                <GridTitleAndImageAndNameAndMore title='Mentor' name='Mentore ' general='872209' />
              </FlexAndJustifyCenterAndItemsCenter>
                <div className='flex gap-4 items-center'>
                  <div>
                  <h1 className='text-lg text-gray-500'>Status</h1>
                <ButtonStatus title='Join class' textColor='text-white' bgColor='bg-blue-400' />
                  </div>
                <PopupEdit w='w-4' h='h-4' />
                </div>
                <ViewButton textPosition='text-end' onclickHandle={setShowPopup1} />
            </div>
            )}
            </GridModelTableBox>

</>
        ) : (
           <>
           <TableFieldItems title={["Sl no","Studnts","Subject","Teacher","Mentor","Status","action"]} />
           {Array(10).fill(0).map((_,i)=>
           <TableStudentsDataWithEdit >
               <TableStudentsData onclickHandle={setShowPopup1} >
                   <h4>ALB/45039</h4>
                   <PersonData img={student} name='Student' more='student@gmail.com' />
                   <Subject languages={["ENGLISH","MATHS","HINDI"]} />
                   <PersonData img={teacher} name='Teacher' more='ALT/4050' />
                   <PersonData img={mentor} name='Mentor' more='78096' />
                   <ButtonStatus title='Join class' textColor='text-white' bgColor='bg-blue-400' />
               </TableStudentsData>
               <Edit width='w-10' height='h-10' />
           </TableStudentsDataWithEdit>
           )}
             </>
        )}

          
        <AddButton addHandle={setShowPopup} />
        {showPopup && <StudentAddPopup setShowPopup={setShowPopup} />}
        {showPopup1 && <StudentsDtailsPopup setShowPopup1={setShowPopup1} />}
    </TableMainBox>
  )
}
