import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

export const BoxTopHeadSection = ({ mTitle, fTitle,prop,grid }) => {
  const [sessionDropdownOpen, setSessionDropdownOpen] = useState(false);
  const [buttonHandle,setButtonHandle] = useState(0)
  const toggleSessionDropdown = () =>
    setSessionDropdownOpen(!sessionDropdownOpen);
  return (
    <div className="mb-6 flex items-center  justify-between">
      <div>
       <h6 className="text-xs text-gray-500">{mTitle  }</h6>
        <h1 className="text-lg font-semibold text-gray-800">{fTitle}</h1>
      </div>
      {grid === '1' && <div className="bg-gray-300 rounded-2xl px-2  flex items-center gap-1">

{ prop?.map((item,i)=>
<button key={i} onClick={()=>setButtonHandle(i)} className={`${buttonHandle === i ? 'bg-gray-100':""} rounded-2xl px-2 py-0.5 text-[10px]`}>{item}</button>
)}
</div> }
      
      <div className="relative">
        <button
          onClick={toggleSessionDropdown}
          className="flex items-center rounded-md text-sm font-medium text-gray-700 "
        >
          <BsThreeDots className="ml-2 h-5 w-5" />
        </button>
        {sessionDropdownOpen && (
          <div className="absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Verification
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Refund
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
