import { Youtube_Logo_CDN, Youtube_Search_Api } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { setSearch } from "../utils/searchSlice";
import { useState, useEffect } from "react";
import { setSearchVideos } from "../utils/searchVideosSlice";
const Header = () => {
  const search = useSelector((state) => state.search);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const getSuggestions = async () => {
    const response = await fetch(Youtube_Search_Api + searchText);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(setSearch({ [searchText]: data[1] }));
  };
  useEffect(() => {
    setTimeout(() => {
      if (search[searchText]) {
        setSuggestions(search[searchText]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout();
    };
  }, [searchText]);
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col h-20 items-center justify-between sticky top-0 z-10 bg-black w-full">
      <div className="flex col-span-1 items-center">
        <span
          className="material-symbols-outlined text-white cursor-pointer text-4xl m-7"
          onClick={handleMenu}
        >
          menu
        </span>
        <span className="cursor-pointer w-28 text-red-500 font-bold text-4xl ">
          PlayView
        </span>
      </div>
      <div className="col-span-10">
        <div className="text-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-2 rounded-l-full border-gray-400 border-2 text-white bg-black"
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="py-2 px-3 rounded-r-full border-gray-400 border-2 bg-gray-400 text-white"
            onClick={() => {
              dispatch(setSearchVideos(searchText));
            }}
          >
            Search
          </button>
        </div>
        <div className="absolute w-1/4">
          {showSuggestions && (
            <ul className="bg-black text-white">
              {suggestions?.map((suggestion, index) => (
                <li className="p-2" key={index}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <span className="material-symbols-outlined text-white ml-3 text-4xl">
          notifications
        </span>
        <span className="material-symbols-outlined text-white m-3 text-4xl">
          account_circle
        </span>
      </div>
    </div>
  );
};

export default Header;
