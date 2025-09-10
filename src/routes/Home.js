import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";
import { useTranslation } from "react-i18next";
import docksideImageHome from "../assets/images/dockside-home.jpg";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();

  const openBookingDialog = () => {
    console.log("open booking dialog");
  };

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
            minHeight: "100vh",
            padding: isDesktop
              ? "4.25rem 18rem 2rem 2rem"
              : "5.5rem 2rem 2rem 2rem",
            flex: 1,
          }}
        >
          <Box
            sx={{
              width: "100",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "pink",
            }}
          >
            <img
              src={docksideImageHome}
              alt="Dockside"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: "600",
                lineHeight: "1.2",
                position: "absolute",
                left: "0",
                top: "1.4rem",
                maxWidth: "24rem",
              }}
            >
              {t("Sensational seafood and breathtaking sea views")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8rem",
              margin: "1rem 0 2rem 0",
            }}
          >
            <Typography
              sx={{
                flex: "2",
                fontSize: "1.4rem",
              }}
            >
              {t(
                "Take in the stunning views over the water. Enjoy laidback lunches, long afternoons and nights to remember"
              )}
            </Typography>
            <Box
              sx={{
                flex: "1",
                textAlign: "right",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                {t("Opening Times")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                {t("Lunch + Dinner")}
                <br />
                {t("Tues - Sat 11am - 10pm")}
                <br />
                {t("Sun 11am - 8pm")}
              </Typography>
              <Button
                disableRipple
                onClick={openBookingDialog}
                sx={{
                  all: "unset",
                  fontSize: "1.2rem",
                  marginTop: "2rem",
                  textDecoration: "underline",
                }}
              >
                {t("Make a reservation")}
              </Button>
            </Box>
          </Box>
        </Box>
        <SideMenu />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
