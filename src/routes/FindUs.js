import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const FindUs = () => {
  return (
    <>
      <SideMenu />
      <Box
        sx={{
          background: "lime",
          height: "100vh",
          position: "relative",
        }}
      >
        Find Us
      </Box>
    </>
  );
};

export default FindUs;
