import PropTypes from "prop-types";
import { FaHome, FaUsers, FaChartBar, FaCog } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

export const Home = ({ activeIcon, handleIconClick }) => {
  return (
    <div
      onClick={() => handleIconClick("home")}
      className="flex flex-col items-center space-y-2 cursor-pointer"
    >
      <div
        className={`  ${
          activeIcon === "home" ? "border border-white rounded-full p-1" : "p-1"
        }`}
      >
        <FaHome
          size={20}
          className={`text-white transition-all duration-300 `}
        />
      </div>
      <span className="hidden md:block text-white text-xs">Home</span>
    </div>
  );
};
export const Sessions = ({ activeIcon, handleIconClick }) => {
  return (
    <div
      onClick={() => handleIconClick("sessions")}
      className="flex flex-col items-center space-y-2 cursor-pointer"
    >
      <div
        className={`${
          activeIcon === "sessions" ? "border border-white rounded-full p-1" : "p-1"
        }`}
      >
        <GiTeacher
          size={20}
          className={`text-white transition-all duration-300 `}
        />
      </div>
      <span className="hidden md:block text-white text-xs">Sessions</span>
    </div>
  );
};
export const Users = ({ activeIcon, handleIconClick }) => {
  return (
    <div
      onClick={() => handleIconClick("users")}
      className="flex flex-col items-center space-y-2 cursor-pointer"
    >
      <div
        className={`${
          activeIcon === "users" ? "border border-white rounded-full p-1" : "p-1"
        }`}
      >
        <FaUsers
          size={20}
          className={`text-white transition-all duration-300 `}
        />
      </div>
      <span className="hidden md:block text-white text-xs">Users</span>
    </div>
  );
};
export const Reports = ({ activeIcon, handleIconClick }) => {
  return (
    <div
      onClick={() => handleIconClick("reports")}
      className="flex flex-col items-center space-y-2 cursor-pointer"
    >
      <div
        className={`${
          activeIcon === "reports" ? "border border-white rounded-full p-1" : "p-1"
        }`}
      >
        <FaChartBar
          size={20}
          className={`text-white transition-all duration-300 `}
        />
      </div>
      <span className="hidden md:block text-white text-xs">Reports</span>
    </div>
  );
};
export const Settings = ({ activeIcon, handleIconClick }) => {
  return (
    <div
      onClick={() => handleIconClick("settings")}
      className="flex flex-col items-center space-y-2 cursor-pointer"
    >
      <div
        className={`${
          activeIcon === "settings" ? "border border-white rounded-full p-1" : "p-1"
        }`}
      >
        <FaCog
          size={20}
          className={`text-white transition-all duration-300 `}
        />
      </div>
      <span className="hidden md:block text-white text-xs">Settings</span>
    </div>
  );
};


