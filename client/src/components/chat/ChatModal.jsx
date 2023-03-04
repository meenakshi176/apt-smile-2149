import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

import Message from "./Message";
import styles from "./styles/chat.module.css";

function ChatModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <button
        onClick={() => handleSizeClick(size)}
        key={"xl"}
        m={4}
        className={styles.ModalButton}
      >
        <img
          src="https://static.wixstatic.com/media/713b90_7841ba78e810446f8765776b69ee76e3~mv2.png"
          alt=""
        />
      </button>
      <Modal
        onClose={onClose}
        size={"xl"}
        isOpen={isOpen}
        className={styles.check}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={styles.chat_container}>
              <Message />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChatModal;
