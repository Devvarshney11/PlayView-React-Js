import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { watchPage } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import { useSearchParams } from "react-router-dom";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(watchPage());
  });
  return (
    <div className = "flex flex-col">
      <div className="h-[calc(100vh-80px)] w-full flex m-12">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          className=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
        <LiveChatContainer/>
      </div>
      <CommentContainer/>
    </div>
  );
};

export default WatchPage;
