import { FaBell, FaUserAlt, FaMoon } from 'react-icons/fa';
import logo from '../../../public/logo.png'

export const NavBar = () => {
  return (
    <header className="bg-gray-200  rounded-br-2xl rounded-bl-2xl">
    <div className="container mx-auto px-4 py-6  flex items-center justify-between">
      
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Albedo Logo" className="h-10 w-auto" />
      </div>
      
      {/* Right Side - Icons */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-blue-500">
          <FaMoon size={20} />
        </button>

        <button className="relative text-gray-600 hover:text-blue-500">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <button className="text-gray-600 hover:text-blue-500">
          <FaUserAlt size={20} />
        </button>
      </div>
    </div>
  </header>
  )
}

