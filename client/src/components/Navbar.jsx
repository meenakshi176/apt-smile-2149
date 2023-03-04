import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import Logo from "../Images/mylogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import GameButton from "./GameButton/GameButton";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuth") || false;

  const user_name = localStorage.getItem("User_name");

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("User_name");
    localStorage.removeItem("Token");

    navigate("/");
  };

  const handleLogin = () => {
    if (!isAuth) {
      navigate("/login");
    }
  };

  const hamStyle = {
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
    backgroundColor: "white",
    padding: "0.5rem ",
    borderRadius: "0.4rem",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <Box w="100%">
      <Flex
        justify="space-around"
        alignItems="center"
        bg="transparent"
        p="0.5rem 0"
      >
        <Link to={"/"}>
          <Box>
            <Image
              src={Logo}
              alt="RPS"
              cursor="pointer"
              marginLeft="4%"
              width={"75%"}
              height={"75%"}
            />
          </Box>
        </Link>

        <Flex
          display={["none", "none", "flex", "flex"]}
          justify="space-between"
          alignItems="center"
          gap="1.5rem"
          fontSize={"20px"}
        >
          <Link to={"/"}>
            <Flex alignItems="center" gap="0.3rem">
              <Text
                color="white"
                _hover={{
                  color: "black",
                  bg: "white",

                  borderRadius: "10px",
                }}
                padding={2}
              >
                Home
              </Text>
            </Flex>
          </Link>

          <Flex alignItems="center" gap="0.3rem">
            <GameButton name="Create Room" type="friend" />
          </Flex>

          <Flex alignItems="center" gap="0.3rem">
            <GameButton name="Join Room" type="stranger" />
          </Flex>

          <Box display="flex" alignItems="center" color="white">
            <Button
              bg={"transparent"}
              _hover={{ color: "black", bg: "white" }}
              fontSize={"20px"}
              onClick={handleLogin}
            >
              {isAuth ? user_name : "Login"}
            </Button>
          </Box>

          {isAuth && (
            <Box display="flex" alignItems="center" color="white">
              <Button
                bg={"transparent"}
                _hover={{ color: "black", bg: "white" }}
                fontSize={"20px"}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          )}
        </Flex>

        <Box display={["inline-block", "inline-block", "none", "none"]}>
          <GiHamburgerMenu color="white" onClick={onOpen} size="1.5rem" />
        </Box>

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          background={"#2e1f8663"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore</DrawerHeader>
            <DrawerBody background={"#2e1f8663"}>
              <Link to={"/"}>
                <Flex m="25px auto" style={hamStyle}>
                  <Text>Home</Text>
                </Flex>
              </Link>

              <Flex m="25px auto" style={hamStyle}>
                <GameButton
                  name="Create Room"
                  type="friend"
                  color={"#2e1f8663"}
                />
              </Flex>

              <Flex m="25px auto" style={hamStyle}>
                <GameButton
                  name="Join Room"
                  type="stranger"
                  color={"#2e1f8663"}
                />
              </Flex>

              <Box display="flex" style={hamStyle} bg="black">
                <Button
                  bg={"transparent"}
                  _hover={{ color: "black", bg: "white" }}
                  fontSize={"20px"}
                  onClick={handleLogin}
                >
                  {isAuth ? user_name : "Login"}
                </Button>
              </Box>

              {isAuth && (
                <Box display="flex" alignItems="center" color="white">
                  <Button
                    bg={"transparent"}
                    _hover={{ color: "black", bg: "white" }}
                    fontSize={"20px"}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Box>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
