import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#262425",
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.35rem",
        padding: isDesktop ? "1rem 17rem 1rem 1rem" : "1rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.7rem",
        }}
      >
        {t("design")}
        &nbsp;&nbsp;|&nbsp;&nbsp;{t("build")}&nbsp;&nbsp;|&nbsp;&nbsp;&copy;
        {t("copyright")} {currentYear}:{" "}
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
