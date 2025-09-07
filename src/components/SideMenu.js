import { Box } from "@mui/material";
import React from "react";
import StyledLink from "./StyledLink";

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: "12rem",
        minHeight: "100vh",
        position: "fixed",
        right: "0",
        top: "0",
        zIndex: "9",
        padding: "1rem",
        backgroundColor: "#201d1e",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/menus">Menus</StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/whats-on">What's On</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/find-us">Find Us</StyledLink>
      </Box>
    </Box>
  );
};

export default SideMenu;
