import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const Events = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          background: "pink",
          minHeight: "100vh",
          padding: "1rem",
          paddingRight: "15rem",
          flex: 1,
        }}
      >
        <Box
          sx={{
            background: "lime",
          }}
        >
          Events
        </Box>
      </Box>
      <SideMenu />
    </Box>
  );
};

export default Events;
