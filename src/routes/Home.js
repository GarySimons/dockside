import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const Home = () => {
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
            background: "yellow",
          }}
        >
          Home
        </Box>
      </Box>
      <SideMenu />
    </Box>
  );
};

export default Home;
