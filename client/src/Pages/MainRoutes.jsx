import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Result from "./Result";
import Login from "../components/users/login";
import Register from "../components/users/register";
import { Box } from "@chakra-ui/react";
import Room from "../Pages/Room/index.jsx";

const MainRoutes = () => {
  const styles = {
    width: "1000px",
    height: "550px",
    backgroundColor: "#1d145563",
    borderRadius: "30px",
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%)   0px 3px 4px 0px rgb(0 0 0 / 14%) 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    zIndex: 2,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  };

  return (
    <Box style={styles}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
