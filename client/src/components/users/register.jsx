import {
  Stack,
  Input,
  Box,
  Image,
  Text,
  Badge,
  Button,
  FormLabel,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PasswordInput } from "./PasswordInput";
import Navbar from "../Navbar";

const Register = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (name && email && password) {
      axios
        .post("http://localhost:4300/users/register", {
          username: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          // console.log(res.data.token);
          console.log(res.data.msg);
          alert(res.data.msg);
          Navigate("/login");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    } else {
      alert("Please Fill The Required Fields");
    }
  };

  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Navbar />
      <div>
        <Box w={{ base: "90%", sm: "90%", md: "60%", lg: "50%" }} m="auto">
          <Box borderBottomWidth="1px" w="100%">
            <Box
              p="4"
              w="100%"
              display="flex"
              justifyContent="center"
              alignContent="center"
              bgColor="#d11243"
            >
              <Image
                w="100%"
                src="https://tse1.mm.bing.net/th?id=OIP.KrymDKoJnPUh28-L6Wj_JgHaEK&pid=Api&rs=1&c=1&qlt=95&w=198&h=111"
              />
            </Box>
          </Box>
          <Stack spacing="24px" mt="10px">
            <Box w="100%">
              <FormLabel htmlFor="username" color={"white"}>
                {" "}
                Name
              </FormLabel>
              <Input
                w="100%"
                placeholder="Enter your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                color={"white"}
              />
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="username" color={"white"}>
                Email
              </FormLabel>
              <Input
                w="100%"
                placeholder="Enter your email id"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color={"white"}
              />
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="username" color={"white"}>
                Password
              </FormLabel>
              <PasswordInput password={password} setPassword={setPassword} />
            </Box>

            <Box>
              <Button bg="#d11243" w="100%" onClick={handleClick} mt="20px">
                Submit{" "}
                {isLoading && (
                  <div>
                    <Spinner color="red.500" />
                  </div>
                )}
              </Button>
              <Box mt="5px" mb="5px" textAlign="center">
                Have an account?{" "}
              </Box>
              <Link to="/login">
                <Box
                  bg="#d11243"
                  w="25%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  m="auto"
                  borderRadius="3px"
                  paddingBottom="2px"
                  vertical-align="super"
                  fontSize="12px"
                  fontWeight="500"
                  line-height="20px"
                  padding-top="10px"
                >
                  <Box>Login</Box>
                </Box>
              </Link>
            </Box>
          </Stack>
        </Box>
      </div>
    </Flex>
  );
};

export default Register;
