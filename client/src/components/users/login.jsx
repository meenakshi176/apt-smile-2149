import {
  Stack,
  Input,
  Box,
  Image,
  Text,
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

const Login = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (email && password) {
      axios

        .post("http://localhost:4300/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("User_name", res.data.user_name);

          alert(res.data.msg);

          if (res.data.token) {
            localStorage.setItem("Token", res.data.token);
            const isAuth = true;
            localStorage.setItem("isAuth", isAuth);
            Navigate("/");
            window.location.reload(false);
          } else {
            Navigate("/login");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    } else {
      alert("Please Fill your credentials");
    }
  };
  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Navbar />
      <div>
        <Box w={{ base: "90%", sm: "90%", md: "60%", lg: "50%" }} m="auto">
          <Box borderBottomWidth="1px" w="100%">
            <Flex p="1" w="100%" margin={"auto"} justify="center">
              <Image
                w="37%"
                height={"37%"}
                src="https://tse1.mm.bing.net/th?id=OIP.KrymDKoJnPUh28-L6Wj_JgHaEK&pid=Api&rs=1&c=1&qlt=95&w=198&h=111"
              />
            </Flex>
          </Box>
          <Stack spacing="24px" mt="10px">
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
                Don't Have an Account?
              </Box>
              <Link to="/signup">
                <Box
                  bg="#d11243"
                  w="25%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  m="auto"
                  borderRadius="3px"
                  paddingBottom="2px"
                >
                  <Box>Register</Box>
                </Box>
              </Link>
            </Box>
          </Stack>
        </Box>
      </div>
    </Flex>
  );
};

export default Login;
