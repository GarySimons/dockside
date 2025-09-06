import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const WhatsOn = () => {
  return (
    <>
      <SideMenu />
      <Box
        sx={{
          background: "yellow",
          height: "140vh",
          position: "relative",
        }}
      >
        What's On
      </Box>
    </>
  );
};

export default WhatsOn;
