import { useSelector } from "react-redux";
import "../App.css"

const SideBarCard = ({name})=>{ 
  return (
      <button className="w-full rounded-xl hover:bg-zinc-500 text-white py-2">{name}</button>
  );
}
const mainList = ["Home", "Shorts", "Subscription"]
const yourList = ["Your Channel", "History", "Your Videos", "Watch Later", "Liked Videos"]
const exploreList = ["Movies", "News", "Live", "Fashion & Beauty", "Learning", "Spotlight"]
const moreList = ["Settings", "Report History", "Help", "Send Feedback"]
const Sidebar = () => {
  const toggle = useSelector((state)=>state.app.isMenuOpen);
  if(!toggle) return null;
  return ( 
      <div className=" focus:bg-zinc-300 flex flex-col h-full bg-black w-[240px] no-scrollbar  md:block md:relative  translate-x-[-240] md:translate-x-0 absolute transition-all overflow-y-scroll">
        <div className="flex flex-col">
          {mainList.map((name, index) => <SideBarCard key={index+name} name={name}/>)}
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-white text-xl font-bold text-center">Library</h1>
          {yourList.map((name, index) => <SideBarCard key={index+name} name={name}/>)}
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-white text-xl font-bold text-center">Explore</h1>
          {exploreList.map((name, index) => <SideBarCard key={index+name} name={name}/>)}
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-white text-xl font-bold text-center">More From Youtube</h1>
          {moreList.map((name, index) => <SideBarCard key={index+name} name={name}/>)}
        </div>
      </div>
  );
};

export default Sidebar