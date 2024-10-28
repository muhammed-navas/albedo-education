import React from 'react'
import { PersonalDetailsLeftAndRightSide } from '../../children/popup/PersonalDetailsLeftAndRightSide'
import { Close } from '../../components/component/Close'
import { NameAndEmail } from '../../components/component/NameAndEmail'
import { PersonalDetailsLeftSide } from '../../components/component/PersonalDetailsLeftSide'
import { PersonalMentorDetails, PersonalMoreDetails } from '../../components/component/PersonalMoreDetails'

export const StudentsDtailsPopup = () => {
    const sideData = [ "Personal Data","Package Data","More"]
  return (
       <PersonalDetailsLeftAndRightSide>
            <PersonalDetailsLeftSide items={sideData} />
            <div className='py-6 px-16'>
                <Close />
                <NameAndEmail/>
                <PersonalMoreDetails />
                <PersonalMentorDetails />
            </div>
       </PersonalDetailsLeftAndRightSide>
  )
}
