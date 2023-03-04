import { useContext } from "react";
import { SocketContext } from "../../Context/SocketContext";
import btn_background_img from "../../Images/btn_background.png";
import styles from "./styles.module.css";

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
    <button
      className={styles.btn}
      color={color ? { color } : "white"}
      onClick={() => handleChange(type)}
    >
      <img
        src={btn_background_img}
        alt="btn_background_img"
        className={styles.btn_background_img}
      />
      {name}
    </button>
  );
};

export default GameButton;
