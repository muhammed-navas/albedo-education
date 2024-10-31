
import { MdClose, MdAdd, MdEdit } from "react-icons/md"
import { Close } from "../component/Close"
import { Input } from "../component/Input"

export const AddPaymentDetails = ({setAddClickHandle}) => {

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-5xl h-[40rem]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-0">
          <h2 className="text-xl font-semibold">Add new payment details</h2>
        <Close  closeHandle={setAddClickHandle} /> 
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Package Section */}
          <div className="border border-gray-200 rounded-2xl p-6 relative">
            <div className="text-lg mb-4">Package 01</div>
            
            {/* Course Selection */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                <div>
                  <span className="font-medium">CBSE LP </span>
                  <span className="font-medium">English</span>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <MdClose className="w-5 h-5" />
                </button>
              </div>
                <Input  w='w-full' placeholder='Package Fee' />
            </div>

            {/* Payment Details */}
            <div className="grid md:grid-cols-2 gap-4">
            <Input  w='w-full' placeholder='Paid' />
            <Input  w='w-full' placeholder='Balance' />
            </div>

            {/* Add Package Button */}
            <button className="absolute -bottom-4 left-6 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <MdAdd className="w-5 h-5" />
            </button>
          </div>

          {/* Total Sections */}
          <div className="space-y-4">
          <Input  w='w-full' placeholder='Total Fee' />
            
            <div className="grid md:grid-cols-2 gap-4">
            <Input  w='w-full' placeholder='Total Paid' />
            <Input  w='w-full' placeholder='Total Blance' />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="flex gap-2 items-center  ">
            <div className="">
              <div className="bg-gray-100 w-fit rounded-xl px-4 py-2 flex justify-between items-center">
                {/* <span className="text-gray-600">Screenshot00872024.PNG</span> */}
            <input type="file" placeholder="add screen short" className="outline-none  border-none  bg-transparent ml-3" />
                <button className="text-gray-500 hover:text-gray-700">
                  <MdClose className="w-5 h-5" />
                </button>
              </div>
            </div>
          {/* Remark Button */}
          <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
            <MdEdit className="w-5 h-5" />
            Write a remark
          </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 flex justify-end gap-4">
          <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium">
            Verify
          </button>
        </div>
      </div>
    </div>
  )
}