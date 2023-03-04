import { Container, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import HomeLogo from "../Images/HomeLogo.png";

import "../App.css";

const Homepage = () => {
  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Navbar />
      <Container width={"container.xl"}>
        <Box>
          <Image src={HomeLogo} alt="logo" />
        </Box>
      </Container>
    </Flex>
  );
};

export default Homepage;
