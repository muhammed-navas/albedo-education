import { useState } from "react"
import { PersonalDetailsLeftAndRightSide } from "../../children/popup/PersonalDetailsLeftAndRightSide"
import { Close } from "../component/Close"
import { CurrentStatus } from "../component/CurrentStatus"
import { PopupDelete } from "../component/PopupDelete"
import { PopupEdit } from "../component/PopupEdit"

export const PaymentDetails = ({setClickHandle}) => {
  return (
    <PersonalDetailsLeftAndRightSide>
    <div className="w-full   bg-white rounded-3xl px-10 py-4 shadow-lg">
      <div className="flex flex-row items-center justify-between p-6 pb-2">
        <h2 className="text-xl font-semibold">Payment details</h2>
          <Close closeHandle={setClickHandle} />
      </div>
      <div className="p-6">
        <div className="space-y-6">
                <div className="flex items-start justify-between gap-16">
          <div className="space-y-4">
            <div className="text-sm text-gray-500">Package</div>
            <div className="space-y-1">
              <div className="text-base font-medium">Maths</div>
              <div className="text-emerald-500 text-sm">2ND STD</div>
              <div className="text-gray-600 text-sm">CBSE</div>
            </div>
          </div>
          <div>
          <div className="text-sm text-gray-500 pb-6">Status</div>
          <CurrentStatus />
          </div>
                </div>

          {/* Fee Details Section */}
          <div className="bg-gray-200 p-3 rounded-2xl  space-y-3">
            <div className="text-sm text-gray-500">Fee Details</div>
            <div className="text-2xl font-medium">₹5,000</div>
            <div className="flex justify-between text-sm">
              <div>
                <div className="text-gray-500">Paid Fee</div>
                <div className="text-emerald-500 font-medium">₹5,000</div>
              </div>
              <div>
                <div className="text-gray-500">Balance Fee</div>
                <div className="text-red-500 font-medium">₹5,000</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-2">
          <PopupEdit />
        <PopupDelete  />
          </div>
        </div>
      </div>
    </div>
    </PersonalDetailsLeftAndRightSide>
  )
}
