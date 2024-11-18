import React, { Fragment } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/searchBar/SearchBar";
import { ContextProvider } from "./context/MyContext";
import { HomePage } from "./page/home/HomePage";
import { Mentor } from "./page/mentor/Mentor";
import { Navigation } from "./page/navigation/NavigationFixed";
import { Student } from "./page/students/Student";
import { Teacher } from "./page/teacher/Teacher";

const App = () => {
  return (
    <ContextProvider>
      <>
      <div className="bg-gray-300 min-h-screen ">
        <NavBar />
        <div className="px-2 pt-16">
          {/* <SearchBar /> */}
          {/* <Student /> */}
          {/* <Teacher /> */}
          {/* <Mentor /> */}
          <HomePage />
        </div>
        <Navigation />
      </div>
      </>
    </ContextProvider>
  );
};

export default App;

