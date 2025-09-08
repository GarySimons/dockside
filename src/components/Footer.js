import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#262425",
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: isDesktop ? "1rem 17rem 1rem 1rem" : "1rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.7rem",
        }}
      >
        design&nbsp;&nbsp;|&nbsp;&nbsp;build&nbsp;&nbsp;|&nbsp;&nbsp;&copy;
        copyright {currentYear}
      </Typography>
      <a
        href="https://www.garysimons.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography
          sx={{
            fontSize: "0.7rem",
            textDecoration: "underline",
            color: "#ffffff",
          }}
        >
          GCS
        </Typography>
      </a>
    </Box>
  );
};

export default Footer;
