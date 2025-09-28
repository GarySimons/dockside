import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import StyledLink from "./StyledLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ReservationDialog from "./ReservationDialog";

const SideMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

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
        height: "100%",
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
      <ReservationDialog open={openDialog} onClose={handleClose} />

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
        <Box
          sx={{
            margin: "0 0 2rem 0",
            padding: "0 0 0.75rem 0",
          }}
        >
          <LanguageSwitcher />
        </Box>
        <StyledLink to="/">{t("Home")}</StyledLink>
        <StyledLink to="/menus">{t("Menus")}</StyledLink>
        <StyledLink to="/drinks">{t("Drinks")}</StyledLink>
        <StyledLink to="/events">{t("Events")}</StyledLink>
        {/* <StyledLink to="/whats-on">{t("What's On")}</StyledLink> */}
        {/* <StyledLink to="/contact">{t("Contact")}</StyledLink> */}
        <StyledLink to="/find-us">{t("Find Us")}</StyledLink>
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
            gap: "0.55rem",
            marginBottom: "0.5rem",
          }}
        >
          <Box
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "transparent",
              "&:hover": {
                opacity: "0.6",
              },
            }}
          >
            <FacebookIcon />
          </Box>
          <Box
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "transparent",
              "&:hover": {
                opacity: "0.6",
              },
            }}
          >
            <InstagramIcon />
          </Box>
        </Box>
        <Typography
          onClick={handleOpen}
          sx={{
            color: "#ffffff",
            fontSize: "0.8rem",
            textDecoration: "none",
            fontWeight: "700",
            cursor: "pointer",
            marginBottom: "0.5rem",
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "underline",
              opacity: 0.6,
            },
          }}
        >
          {t("Make a reservation")}
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "0.75rem",
            fontHeight: "1.4",
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
