import { useSelector } from "react-redux";

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
    <div className="flex w-2/5">
      <div className="flex flex-col h-screen bg-black overflow-y-auto">
        <div className="flex flex-col">
          {mainList.map((name, index) => <SideBarCard key={index} name={name}/>)}
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-white text-xl font-bold">Library</h1>
          {yourList.map((name, index) => <SideBarCard key={index} name={name}/>)}
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-white text-xl font-bold">Explore</h1>
          {exploreList.map((name, index) => <SideBarCard key={index} name={name}/>)}
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-white text-xl font-bold">More From Youtube</h1>
          {moreList.map((name, index) => <SideBarCard key={index} name={name}/>)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar