import React from "react";
import { TableFieldItems, TableStudentsData, TableStudentsDataWithEdit } from "../../children/table/MainTableBox";
import { useMyContext } from "../../context/MyContext";
import { CurrentStatus } from "../component/CurrentStatus";
import { DeleteWhiteBg } from "../component/DeleteWhiteBg";
import { Edit } from "../component/Edit";
import { NameAndEmail } from "../component/NameAndEmail";
import { PackageDataSmall } from "../component/PackageData";
import { PersonalDetailsLeftSide } from "../component/PersonalDetailsLeftSide";
import {
  PersonalMentorDetails,
  PersonalMoreDetails,
} from "../component/PersonalMoreDetails";
import { PopupDelete } from "../component/PopupDelete";
import { PopupEdit } from "../component/PopupEdit";
import { DeleteHandlePopup } from "./DeleteHandlePopup";

export const StudentDetailsPopupLeftSideItems = ({
  bgColor,
  setBgColor,
  sideData,
}) => {
  const {deleteHandle} = useMyContext();
  return (
    <div className="flex flex-col bg-gray-100 rounded-tl-2xl rounded-bl-2xl p-8 py-6 justify-between items-start ">
      <PersonalDetailsLeftSide
        initial={bgColor}
        setInitial={setBgColor}
        items={sideData}
      />
      <div className="flex gap-3 items-center">
        <PopupEdit />
        <PopupDelete />
      </div>
      {deleteHandle && <DeleteHandlePopup />}
    </div>
  );
};

export const StudentsPersonalDetailsInPopup = () => {
  return (
    <div>
      <NameAndEmail />
      <PersonalMoreDetails />
      <PersonalMentorDetails />
    </div>
  );
};

export const StudentsPackageDetailsInPopup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <PackageDataSmall />
      <PackageDataSmall />
      <PackageDataSmall />
      <PackageDataSmall />
    </div>
  );
};

export const StudentsPaymentDetailsInPopup = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-xl">
        <TableFieldItems title={["Date","Package","Payment","Status","action"]} />
        <TableStudentsDataWithEdit>
            <TableStudentsData>
                <h1 className="font-semibold text-xs">30 Sep 2024</h1>
                <div>
                    <h5 className="text-[10px] text-gray-600">2ND STD</h5>
                    <h2 className="text-xs font-semibold">Maths</h2>
                    <h5 className="text-[10px] text-gray-600">CBSE</h5>
                </div>
                <div>
                    <h2 className="text-xs font-semibold">$ 5000</h2>
                    <h5 className="text-[10px] text-gray-600">Paid Fee : $ 5000</h5>
                    <h5 className="text-[10px]  text-orange-600">Balance Fee : $ 500</h5>
                </div>
                <CurrentStatus gap='gap-2' px='px-2' py='py-1' textSize='text-[9px]' w='w-8' />
            </TableStudentsData>
            <div className="flex gap-1">
            <Edit />
            <DeleteWhiteBg />
            </div>
        </TableStudentsDataWithEdit>
    </div>
  );
};
