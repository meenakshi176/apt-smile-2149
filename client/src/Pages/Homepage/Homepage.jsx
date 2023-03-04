import { Container, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/Navbar";
import HomeLogo from "../../Images/HomeLogo.png";
import scissors_right_hand_img from "../../Images/scissors_right_hand.png";
import rock_left_hand_img from "../../Images/rock_left_hand.png";
import GameButton from "../../components/GameButton/GameButton";

import styles from "./styles.module.css";

const Homepage = () => {
  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Navbar />
      <>
        <Box className="styles.leftBox">
          <Image src={HomeLogo} alt="logo" width="500px" />
        </Box>

        <Box className="styles.rightBox">
          <Image
            src={scissors_right_hand_img}
            alt="paper_hand"
            className={styles.paper_hand}
          />
          <Image
            src={rock_left_hand_img}
            alt="rock_hand"
            className={styles.rock_hand}
          />
          <Box className={styles.btn_container}>
            <GameButton name="Create Room" type="friend" />
            <GameButton name="Join Room" type="stranger" />
          </Box>
        </Box>
      </>
    </Flex>
  );
};

export default Homepage;
