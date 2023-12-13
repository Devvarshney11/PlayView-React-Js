import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainVideoContainer from "./components/MainVideoContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainVideoContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage/>,
      },
    ],
  },
]);
function App() {
  return (
    <div className="bg-black h-full">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
