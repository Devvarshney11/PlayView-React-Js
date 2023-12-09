import MainVideoContainer from "./MainVideoContainer"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex flex-col">
        <Sidebar/>
        <MainVideoContainer/>
    </div>
  )
}

export default Body