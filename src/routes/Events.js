import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const Events = () => {
  return (
    <>
      <SideMenu />
      <Box
        sx={{
          background: "cyan",
          height: "100vh",
          position: "relative",
        }}
      >
        Events
      </Box>
    </>
  );
};

export default Events;
