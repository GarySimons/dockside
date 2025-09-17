import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";
import { useTranslation } from "react-i18next";
import docksideImageEvents from "../assets/images/dockside-events.jpg";
import docksideImageExterior from "../assets/images/dockside-exterior.jpg";
import ReservationForm from "../components/ReservationForm";
import { useState } from "react";
import ReservationDialog from "../components/ReservationDialog";

const FindUs = () => {
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

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <ReservationDialog open={openDialog} onClose={handleClose} />
        <MainLogo />
        <Box
          sx={{
            minHeight: "100vh",
            padding: isDesktop
              ? "4.25rem 18rem 2rem 2rem"
              : "5.5rem 2rem 2rem 2rem",
            flex: 1,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100",
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={docksideImageEvents}
              alt="Dockside Events"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Typography
              sx={{
                fontSize: "2.2rem",
                fontWeight: "600",
                lineHeight: "1.2",
                position: "absolute",
                left: "0",
                top: isDesktop ? "1rem" : "0.4rem",
              }}
            >
              Find us
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              width: "100",
              padding: "2.5rem 1rem 2.5rem 1rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "700",
                lineHeight: "1.3",
                color: "#000000",
                textAlign: "center",
              }}
            >
              125 Harbour Drive, St. John's, NL, A1C 6N6
            </Typography>
            <Box
              sx={{
                width: "100",
                padding: "1rem 0 0 0",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <Typography
                component="a"
                href="mailto:hello@dockside.ca"
                sx={{
                  color: "#000000",
                  fontSize: "0.85rem",
                  fontHeight: "1.4",
                  textDecoration: "none",
                  fontFamily: "Google Sans Code",
                  fontWeight: "600",
                  "&:hover": {
                    opacity: 0.6,
                  },
                }}
              >
                hello@dockside.ca
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "0.85rem",
                  fontHeight: "1.4",
                  fontFamily: "Google Sans Code",
                  fontWeight: "600",
                }}
              >
                709.726.8076
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#d6f5ff",
              width: "100",
              padding: "2rem 1rem 2rem 1rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "700",
                lineHeight: "1.3",
                color: "#000000",
                textAlign: "center",
              }}
            >
              {t("Opening Times")}
            </Typography>
            <Box
              sx={{
                width: "100",
                padding: "0.5rem 0 1rem 0",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "0.75rem",
                  fontHeight: "1.4",
                  fontFamily: "Google Sans Code",
                  fontWeight: "600",
                }}
              >
                {t("Tues - Sat 11am - 10pm")}
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "0.75rem",
                  fontHeight: "1.4",
                  fontFamily: "Google Sans Code",
                  fontWeight: "600",
                }}
              >
                {t("Sun 11am - 8pm")}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: "400",
                lineHeight: "1.3",
                color: "#000000",
                textAlign: "center",
              }}
            >
              Please note that the last seating for food is 9.30pm Tues - Sat
              and 7.30pm on Sundays.
            </Typography>
            <Button
              disableRipple
              onClick={handleOpen}
              sx={{
                all: "unset",
                fontSize: "1rem",
                marginTop: "2rem",
                textDecoration: "underline",
                color: "#000000",
                fontWeight: "700",
                textAlign: "center",
                "&:hover": {
                  textDecoration: "underline",
                  opacity: "0.6",
                },
              }}
            >
              {t("Make a reservation")}
            </Button>
          </Box>

          <Box
            sx={{
              backgroundColor: "#3d393a",
              width: "100",
              height: "35rem",
              padding: "3rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "3rem",
            }}
          >
            <Box
              sx={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={docksideImageExterior}
                alt="Dockside Exterior"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "pink",
                flex: "1",
              }}
            ></Box>
          </Box>
        </Box>
        <SideMenu />
      </Box>
      <Footer />
    </>
  );
};

export default FindUs;
