import React from "react";
import { commentData } from "../utils/constants";

const Comments = ({ data }) => {
  return (
    <div className="flex space-x-2">
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="user"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col space-y-1">
        <span className="font-semibold text-lg text-white">
          {data.username}
        </span>
        <span className="text-sm text-white">{data.comment}</span>
      </div>
    </div>
  );
};
const CommentList = ({ data }) => {
  return data.map((item, index) => {
    return (
      <div className="m-5 border border-l-white p-5" key={item.username+index}>
            <Comments data={item} />
        {item.replies && <CommentList data={item.replies} />}
      </div>
    );
  }
  );
};
const CommentContainer = () => {
  return (
    <div className="m-5">
      <div className="text-white my-5 text-3xl font-bold">Comments : </div>
      <CommentList data={commentData} />;
    </div>
  );
};

export default CommentContainer;
