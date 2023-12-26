import { useEffect, useState } from "react";
import { Youtube_API_CDN,Youtube_Search_Video_Api,YOUR_API_KEY} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
const FilterCard = ({ name }) => {
  return (
    <button className="rounded-xl hover:bg-zinc-500 text-white py-2 px-3 bg-zinc-600 focus:bg-zinc-300 focus:text-zinc-600 font-semibold mr-3">
      {name}
    </button>
  );
};
const filterList = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Movies",
  "Fashion & Beauty",
  "Learning",
  "Spotlight",
  "Live",
  "360° Video",
  "Browse channels",
  "Ranbir Kapoor",
  "Folk Music",
  "Shark Tank",
];
const MainVideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const search = useSelector((state) => state.searchVideos.value);
  async function fetchVideos() {
    const response = await fetch(Youtube_API_CDN);
    const data = await response.json();
    setVideos(data.items);
  }
  async function fetchSearchVideos() {
    const response = await fetch(Youtube_Search_Video_Api+search+"&key="+YOUR_API_KEY);
    const data = await response.json();
    setVideos(data.items);
  }
  useEffect(() => {
    if(search==="")
      fetchVideos();
    else
      fetchSearchVideos();
  },[search]);
  return (
    <div className="grow w-[calc(100%-240px)] h-full">
      <div className="overflow-x-auto flex  p-4 no-scrollbar">
        {filterList.map((item, index) => (
          <div className="flex-shrink-0" key={index + item}>
            <FilterCard name={item} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos?.map((item) => (
          <Link to={"/watch?v="+(item.id.videoId?item.id.videoId:item.id)} key={item.id.videoId?item.id.videoId:item.id}>
            <VideoCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MainVideoContainer;
