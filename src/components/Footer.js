import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";
import NewsletterBottomBar from "./NewsletterBottomBar";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "800",
          }}
        >
          {t("Newletter Signup")}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#70bbd3",
          }}
        >
          {t("Be the first to hear about new menus and upcoming events")}
        </Typography>
        <NewsletterBottomBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
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
                margin: "0 0 0 0.25rem",
                color: "#ffffff",
              }}
            >
              GCS
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
