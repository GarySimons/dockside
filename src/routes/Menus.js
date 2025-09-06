import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const Menus = () => {
  return (
    <>
      <SideMenu />
      <Box
        sx={{
          background: "orange",
          height: "100vh",
          position: "relative",
        }}
      >
        Menus
      </Box>
    </>
  );
};

export default Menus;
