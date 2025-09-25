import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import SideLogo from "../components/SideLogo";

const WhatsOn = () => {
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
        <SideLogo />
        <Box
          sx={{
            minHeight: "100vh",
            padding: isDesktop
              ? "4.25rem 18rem 2rem 2rem"
              : "5.5rem 2rem 2rem 2rem",
            flex: 1,
          }}
        >
          <Box
            sx={{
              background: "#201d1e",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Plaster",
                fontSize: "6rem",
                fontWeight: "900",
                letterSpacing: "0.05rem",
                zIndex: "1",
                color: "#fff",
              }}
            >
              D
            </Typography>
          </Box>
        </Box>
        <SideMenu />
      </Box>
      <Footer />
    </>
  );
};

export default WhatsOn;
