import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const Menus = () => {
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
            background: "cyan",
          }}
        >
          Menus
        </Box>
      </Box>
      <SideMenu />
    </Box>
  );
};

export default Menus;
