import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";
import { Button } from "@chakra-ui/react";

const GameButton = ({ name, type, color }) => {
  const { socket, navigate } = useContext(SocketContext);

  const isAuth = localStorage.getItem("isAuth") || false;

  const handleChange = (type) => {
    socket.emit("room:create", { type }, (err, roomId) => {
      if (isAuth) {
        navigate(`/room/${roomId}`);
      } else {
        navigate(`/login`);
      }
    });
  };

  return (
    <Button
      bg={"transparent"}
      _hover={{ color: "black", bg: "white" }}
      fontSize={"20px"}
      color={color ? { color } : "white"}
      onClick={() => handleChange(type)}
    >
      {name}
    </Button>
  );
};

export default GameButton;
