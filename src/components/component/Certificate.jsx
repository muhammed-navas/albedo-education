import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const Certificate = () => {
  return (
    <div className="grid place-items-center h-96">

    <div className="flex flex-col justify-center items-center bg-cyan-300 px-16 py-5 rounded-2xl" >
      <AiOutlineExclamationCircle className="h-7 w-7" />
      <h1>This Feature Will Update Next Version</h1>
    </div>
    </div>
  );
};
