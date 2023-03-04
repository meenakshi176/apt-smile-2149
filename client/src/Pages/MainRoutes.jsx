import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Result from "./Result";
import Login from "../components/users/login";
import Register from "../components/users/register";
import { Box } from "@chakra-ui/react";

const MainRoutes = () => {
  const styles = {
    width: "100%",
    height: "80%",
    backgroundColor: "#1d145563",
    borderRadius: "30px",
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%)   0px 3px 4px 0px rgb(0 0 0 / 14%) 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    zIndex: 2,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    padding: 20,
  };

  return (
    <Box style={styles}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
