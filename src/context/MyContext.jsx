import { createContext, useContext, useState } from "react";


const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    const [deleteHandle,setDeleteHandle] = useState(false)
  
    return (
      <MyContext.Provider value={{ deleteHandle, setDeleteHandle }}>
        {children}
      </MyContext.Provider>
    );
  };

  export const useMyContext = () => {
    return useContext(MyContext);
  };