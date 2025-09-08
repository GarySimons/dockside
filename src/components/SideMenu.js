import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import StyledLink from "./StyledLink";

const SideMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setShowSideNav(isDesktop);
  }, [isDesktop]);

  const [showSideNav, setShowSideNav] = useState(true);

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "16rem",
        height: "100vh",
        position: "fixed",
        right: isDesktop ? "0" : showSideNav ? "0" : "-16rem",
        top: "0",
        zIndex: 1,
        backgroundColor: "#3d393a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "right 0.3s ease-in-out",
      }}
    >
      {!isDesktop && (
        <Button
          onClick={toggleSideNav}
          disableRipple
          sx={{
            all: "unset",
            position: "fixed",
            right: "1rem",
            top: "0.75rem",
            zIndex: "2",
            cursor: "pointer",
            color: "#ffffff",
            "&:hover": {
              opacity: "0.6",
            },
          }}
        >
          {showSideNav ? (
            <ClearIcon sx={{ fontSize: "2.5rem !important" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "2.5rem !important" }} />
          )}
        </Button>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          padding: "2rem 1rem",
        }}
      >
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/menus">Menus</StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/whats-on">What's On</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/find-us">Find Us</StyledLink>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Box
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              height: "2rem",
              width: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              borderRadius: "50%",
              color: "inherit",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#575555",
              },
            }}
          >
            <FacebookIcon
              sx={{
                color: "#ffffff",
              }}
            />
          </Box>
          <Box
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              height: "2rem",
              width: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#575555",
              },
            }}
          >
            <InstagramIcon
              sx={{
                color: "#ffffff",
              }}
            />
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "0.75rem",
            fontHeight: "1.4",
            fontFamily: "Google Sans Code",
            fontWeight: "300",
          }}
        >
          125 Harbour Drive
          <br />
          St. John's, NL, A1C 6N6
        </Typography>
        <Typography
          component="a"
          href="mailto:hello@dockside.ca"
          sx={{
            color: "#ffffff",
            fontSize: "0.75rem",
            fontHeight: "1.4",
            textDecoration: "none",
            fontFamily: "Google Sans Code",
            fontWeight: "300",
            "&:hover": {
              opacity: 0.6,
            },
          }}
        >
          hello@dockside.ca
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "0.75rem",
            fontHeight: "1.4",
            fontFamily: "Google Sans Code",
            fontWeight: "300",
          }}
        >
          709.726.8076
        </Typography>
      </Box>
    </Box>
  );
};

export default SideMenu;
