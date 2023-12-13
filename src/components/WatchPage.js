import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { watchPage } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(watchPage());
  });
  return (
    <div className= "h-[calc(100vh-80px)] w-full">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player"
        className="my-10 mx-36"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
