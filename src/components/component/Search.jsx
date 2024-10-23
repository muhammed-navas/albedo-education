import { FaSearch } from 'react-icons/fa';

export const Search = () => {
  return (
    <div className="flex justify-center items-center ">
    <div className="flex items-center bg-gray-200 rounded-full p-2 shadow-md w-full max-w-md sm:max-w-lg lg:max-w-xl">
      <FaSearch className="text-gray-400 ml-3" />
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-200 outline-none text-gray-600 px-4 py-2 w-full rounded-full focus:ring-2 focus:ring-gray-300"
      />
    </div>
  </div>
  )
}
