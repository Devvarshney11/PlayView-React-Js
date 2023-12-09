import { Youtube_Logo_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col h-20 items-center justify-between">
      <div className="flex col-span-1 items-center">
        <span className="material-symbols-outlined text-white cursor-pointer text-4xl m-7" 
        onClick={handleMenu}>menu</span>
        <img className="h-20 cursor-pointer"src={Youtube_Logo_CDN} alt="youtube"/>
      </div>
      <div className="col-span-10 text-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/2 p-2 rounded-l-full border-gray-400 border-2 text-white bg-black"
        // onChange={handleInputChange}
      />
        <button className="py-2 px-3 rounded-r-full border-gray-400 border-2 bg-gray-400 text-white">Search</button>
      </div>
      <div className="col-span-1">
        <span className="material-symbols-outlined text-white ml-3 text-4xl">notifications</span>
        <span className="material-symbols-outlined text-white m-3 text-4xl">account_circle</span>
      </div>
    </div>
  );
};

export default Header;
