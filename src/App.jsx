import React, { Fragment } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/searchBar/SearchBar";
import { ContextProvider } from "./context/MyContext";
import { Navigation } from "./page/navigation/NavigationFixed";
import { Student } from "./page/students/Student";

const App = () => {
  return (
    <ContextProvider>
      <>
      <div className="bg-gray-300 min-h-screen ">
        <NavBar />
        <div className="px-2">
          <SearchBar />
          <Student />
        </div>
        <Navigation />
      </div>
      </>
    </ContextProvider>
  );
};

export default App;
