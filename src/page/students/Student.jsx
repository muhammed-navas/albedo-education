import React, { useState } from 'react'
import { TableFieldItems, TableMainBox, TableNavigationBar, TableStudentsData, TableStudentsDataWithEdit } from '../../children/table/MainTableBox'
import { PersonData } from '../../components/component/PersonData'
import { Edit } from '../../components/component/Edit'
import student from '../../../public/student.png'
import teacher from '../../../public/teacher.png'
import mentor from '../../../public/mentor.png'
import { AddButton, ButtonStatus } from '../../components/component/Button'
import { Subject } from '../../components/component/Subject'
import { StudentAddPopup } from '../../popup/students/StudentAddPopup'
import { StudentsDtailsPopup } from '../../popup/students/StudentsDtailsPopup'

export const Student = () => {
    const [ showPopup,setShowPopup] = useState(false)
    const [ showPopup1,setShowPopup1] = useState(false)
  return (
    <TableMainBox >
        <TableNavigationBar values={["Active","Upcoming","Pending","Completed"]} />
        <TableFieldItems title={["Sl no","Studnts","Subject","Teacher","Mentor","Status","action"]} />
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
        <AddButton addHandle={setShowPopup} />
        {showPopup && <StudentAddPopup setShowPopup={setShowPopup} />}
        {showPopup1 && <StudentsDtailsPopup setShowPopup1={setShowPopup1} />}
    </TableMainBox>
  )
}
