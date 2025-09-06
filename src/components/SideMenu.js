import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: "15rem",
        height: "100vh",
        position: "fixed",
        right: "0",
        top: "0",
        zIndex: "9",
        padding: "1rem",
        backgroundColor: "#000000",
      }}
    >
      <Box
        sx={{
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/menus">Menus</Link>
        <Link to="/events">Events</Link>
        <Link to="/find-us">Find Us</Link>
        <Link to="/whats-on">What's On</Link>
        <Link to="/contact">Contact</Link>
      </Box>
    </Box>
  );
};

export default SideMenu;
