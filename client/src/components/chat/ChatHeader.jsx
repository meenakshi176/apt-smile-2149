import React, { useEffect } from "react";

import styles from "./styles/header.module.css";

const ChatHeader = () => {
  const reciever = {
    avatar:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    username: "Demo",
  };

  // useEffect(() => {
  //   console.log("Reciever changed");
  // }, [reciever]);

  return (
    <div className={styles.chat_header}>
      {reciever && (
        <div
          className={`d-flex flex-row justify-contents-center align-items-center h-100 w-25 ${styles.reciever_card}`}
        >
          <img src={`${reciever.avatar}`} alt="" className="w-25 h-50" />
          <p>{reciever.username}</p>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
