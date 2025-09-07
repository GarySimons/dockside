import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const WhatsOn = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          padding: "1rem",
          paddingRight: "17rem",
          flex: 1,
        }}
      >
        <Box
          sx={{
            background: "white",
          }}
        >
          What's On
        </Box>
      </Box>
      <SideMenu />
    </Box>
  );
};

export default WhatsOn;
