import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import styles from "./styles/header.module.css";

const Message = () => {
  return (
    <div className={styles.chat_section}>
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Message;
