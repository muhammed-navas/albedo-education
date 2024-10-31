import React, { useState } from "react";
import { PersonalDetailsLeftAndRightSide } from "../../children/popup/PersonalDetailsLeftAndRightSide";
import { Certificate } from "../../components/component/Certificate";
import { Close } from "../../components/component/Close";
import { StudentDetailsPopupLeftSideItems, StudentsPackageDetailsInPopup, StudentsPaymentDetailsInPopup, StudentsPersonalDetailsInPopup } from "../../components/popuupComponents/PopupComponentsStudents";

export const StudentsDtailsPopup = ({ setShowPopup1 }) => {
  const sideData = [
    "Personal Details",
    "Package Details",
    "Payment Details",
    "Certifiacte",
  ];
  const [bgColor, setBgColor] = useState(0);
  return (
    <PersonalDetailsLeftAndRightSide>
      <div className="flex ">
        <StudentDetailsPopupLeftSideItems bgColor={bgColor} setBgColor={setBgColor} sideData={sideData} />
        <div className={`py-6 ${bgColor === 1 ? 'px-6':'px-16'} bg-gray-200 w-[650px] h-[500px] overflow-y-scroll`}>
          <Close closeHandle={setShowPopup1} />
          {bgColor === 0 && <StudentsPersonalDetailsInPopup /> }
          {bgColor === 1 && <StudentsPackageDetailsInPopup/>}
          {bgColor === 2 && <StudentsPaymentDetailsInPopup/>}
          {bgColor === 3 && <Certificate/>}
        </div>
      </div>
    </PersonalDetailsLeftAndRightSide>
  );
};
