import { Box } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <MainLogo />
        <Box
          sx={{
            height: "100vh",
            padding: isDesktop ? "1rem 17rem 1rem 1rem" : "1rem",
            flex: 1,
          }}
        >
          <Box
            sx={{
              background: "orange",
            }}
          >
            Home
          </Box>
        </Box>
        <SideMenu />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
