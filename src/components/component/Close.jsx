import { IoIosCloseCircleOutline } from "react-icons/io";

export const Close = ({closeHandle}) => {
  return (
    <div onClick={()=>closeHandle(false)} className="cursor-pointer flex justify-end">
      <IoIosCloseCircleOutline className="h-7 w-7" />
    </div>
  );
};
