import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const FindUs = () => {
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
          paddingRight: "17rem",
          flex: 1,
        }}
      >
        <Box
          sx={{
            background: "teal",
          }}
        >
          Find Us
        </Box>
      </Box>
      <SideMenu />
    </Box>
  );
};

export default FindUs;
