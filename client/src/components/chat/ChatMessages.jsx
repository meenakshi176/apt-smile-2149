import React, { useContext, useEffect, useState, useRef } from "react";
import { ChatContext } from "../../context/ChatProvider";
import { SocketContext } from "../../context/SocketContext";
import styles from "./styles/message.module.css";
import { io } from "socket.io-client";

const ChatMessages = () => {
  const [arrivalMessage, setArrivalMessage] = useState({});
  const { messages, setMessages, getChatMsg, socket } = useContext(ChatContext);
  const { player_1, player_2 } = useContext(SocketContext);
  console.log(messages);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:4300");
    socket.current.emit("add-user", player_1);
  }, []);

  // useEffect(() => {
  //   if (player_2) {
  //     getChatMsg({
  //       from: player_1,
  //       to: player_2,
  //     });
  //   }
  // }, [player_2]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieved", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages([...messages, arrivalMessage]);
      console.log(messages);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <div className={styles.chat_messages}>
      {messages &&
        messages.map((item, index) => (
          <div key={index} ref={scrollRef}>
            <div
              className={`${styles.message} ${
                item.fromSelf ? `${styles.sended}` : `${styles.recieved}`
              }`}
            >
              <div className={styles.content}>{item.message}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatMessages;
