import { createContext, useContext, useState } from "react";


const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    const [deleteHandle,setDeleteHandle] = useState(false)
    const [ gridOrList , setGridOrList] = useState(false)
  
    return (
      <MyContext.Provider value={{ deleteHandle, setDeleteHandle ,setGridOrList ,gridOrList }}>
        {children}
      </MyContext.Provider>
    );
  };

  export const useMyContext = () => {
    return useContext(MyContext);
  };