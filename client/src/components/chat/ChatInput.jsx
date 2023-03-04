import React, { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { ChatContext } from "../../context/ChatProvider";
import { SocketContext } from "../../context/SocketContext";
import styles from "./styles/input.module.css";

const ChatInput = () => {
  const [sms, setSms] = useState("");
  const { postMessage, setMessages } = useContext(ChatContext);
  const { player_1, player_2 } = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sms !== "") {
      let item = {
        message: sms,
        to: player_2,
        from: player_1,
      };
      postMessage(item);
      setSms("");
    }
  };

  return (
    <div className={styles.chat_Input}>
      <form className={styles.input_container} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => {
            setSms(e.target.value);
          }}
          value={sms}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
