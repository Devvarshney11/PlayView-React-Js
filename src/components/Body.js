import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex flex-row h-[calc(100%-80px)]">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body
