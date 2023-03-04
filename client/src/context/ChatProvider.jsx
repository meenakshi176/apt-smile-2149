import { createContext, useRef, useState } from "react";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const socket = useRef();

  const postMessage = async (item) => {
    socket.current.emit("send-msg", item);
    let x = { message: item.message, fromSelf: true };
    setMessages([...messages, x]);
  };
  const getChatMsg = async (item) => {
    setMessages([...messages, item]);
  };

  return (
    <ChatContext.Provider
      value={{
        socket,
        postMessage,
        getChatMsg,
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
