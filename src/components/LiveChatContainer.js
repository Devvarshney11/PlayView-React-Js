import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateName, generateRandomMessage } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
const Chat = ({ name, message }) => {
  return (
    <div className="p-4">
      <div className="mb-2 flex items-center">
        <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
        <div className="text-sm font-bold">{name}</div>
      </div>
      <p className="text-sm">{message}</p>
    </div>
  );
};
const LiveChatContainer = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      const name = generateName();
      const message = generateRandomMessage();
      dispatch(addMessage({ name: name, message: message }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-white border border-white h-[500px] w-[300px] rounded-2xl p-4 mx-14">
      <div className="w-full h-[430px] border border-black rounded-xl overflow-y-auto flex flex-col-reverse no-scrollbar">
        {chatMessage.map((message, index) => (
          <Chat
            key={message.name + index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-white rounded-l-xl bg-black text-white px-4 py-2 focus:outline-none"
          onChange = {(e)=>{
            setText(e.target.value)
          }}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-xl px-3 py-2 transition duration-300"
        onClick={()=>{
            dispatch(addMessage({
                name:"Admin",
                message:text,
            }))
            setText("")
        } }>
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChatContainer;
