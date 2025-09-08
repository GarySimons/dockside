import { Box } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";

const Menus = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          padding: isDesktop ? "1rem 17rem 1rem 1rem" : "1rem",
          flex: 1,
        }}
      >
        <Box
          sx={{
            background: "orange",
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
