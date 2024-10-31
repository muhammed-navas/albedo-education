import { useState } from 'react';
import { Home, Reports, Sessions, Settings, Users } from '../../components/navigation/Navigation';
import { FaUser, FaChalkboardTeacher, FaUsersCog, FaUserShield, FaUserFriends } from 'react-icons/fa'; // Example icons

export const Navigation = () => {
  const [activeIcon, setActiveIcon] = useState('');
  const [isUsersOpen, setIsUsersOpen] = useState(false); 
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);

    if (iconName === 'users') {
      setIsUsersOpen(true); 
    } else {
      setIsUsersOpen(false); 
    }
  };

  return (
    <div className='relative'>
      {/* Left sidebar */}
      <div className=' fixed lg:top-[55%] lg:bottom-auto w-3/4 lg:w-auto top-auto bottom-0 lg:left-0 left-[12%] z-[9] transform -translate-y-1/2'>
        <aside
          style={{ backgroundColor: '#793078' }}
          className="rounded-full lg:px-4 flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-0 py-3 lg:py-8 lg:space-y-6"
        >
          <Home activeIcon={activeIcon} handleIconClick={handleIconClick} />
          <Sessions activeIcon={activeIcon} handleIconClick={handleIconClick} />
          <Users activeIcon={activeIcon} handleIconClick={handleIconClick} />
          <Reports activeIcon={activeIcon} handleIconClick={handleIconClick} />
          <Settings activeIcon={activeIcon} handleIconClick={handleIconClick} />
        </aside>
      </div>

      {/* Right sidebar */}
      {isUsersOpen && (
        <div className="absolute lg:left-[90px] lg:top-28 bottom-0 left-0 lg:w-auto w-3/4  lg:h-fit  rounded-full bg-blue-500 lg:py-14 py-3 px-1  flex lg:flex-col flex-row justify-center ">
          <div className="lg:space-y-8 flex lg:flex-col flex-row lg:gap-0 gap-4">
            <div className="flex flex-col items-center ">
              <FaUser className="text-white h-5 w-5" />
              <h6 className="text-white text-[10px]">Student</h6>
            </div>
            <div className="flex flex-col items-center ">
              <FaChalkboardTeacher className="text-white h-5 w-5" />
              <h6 className="text-white text-[10px]">Teacher</h6>
            </div>
            <div className="flex flex-col items-center ">
              <FaUserFriends className="text-white h-5 w-5" />
              <h6 className="text-white text-[10px]">Mentor</h6>
            </div>
            <div className="flex flex-col items-center ">
              <FaUserShield className="text-white h-5 w-5" />
              <h6 className="text-white text-[10px]">Asst. Admin</h6>
            </div>
            <div className="flex flex-col items-center ">
              <FaUsersCog className="text-white h-5 w-5" />
              <h6 className="text-white text-[10px]">Others</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
