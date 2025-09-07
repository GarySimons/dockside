import { Box, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StyledLink from "./StyledLink";

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: "16rem",
        height: "100vh",
        position: "fixed",
        right: "0",
        top: "0",
        zIndex: "9",
        backgroundColor: "#201d1e",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
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
              borderRadius: "50%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FacebookIcon
              sx={{
                color: "#ffffff",
                "&:hover": {
                  opacity: 0.6,
                },
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
            }}
          >
            <InstagramIcon
              sx={{
                color: "#ffffff",
                "&:hover": {
                  opacity: 0.6,
                },
              }}
            />
          </Box>
          <Box
            component="a"
            href="mailto:someone@example.com"
            sx={{
              height: "2rem",
              width: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <EmailIcon
              sx={{
                color: "#ffffff",
                "&:hover": {
                  opacity: 0.6,
                },
              }}
            />
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "0.75rem",
            fontHeight: "1.4",
          }}
        >
          125 Harbour Drive
          <br />
          St. John's, NL, A1C 6N6
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "0.75rem",
            fontHeight: "1.4",
          }}
        >
          709.726.8076
        </Typography>
      </Box>
    </Box>
  );
};

export default SideMenu;
