import { Box, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";
import { useTranslation } from "react-i18next";
import docksideImageEvents from "../assets/images/dockside-events.jpg";

const Events = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();

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
            position: "relative",
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
                top: "1.4rem",
                maxWidth: "24rem",
              }}
            >
              Events & Functions
            </Typography>
            <Box
              sx={{
                backgroundColor: "#488599",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: isMobile ? "100%" : "20rem",
                position: "absolute",
                bottom: "0",
                left: "0",
                zIndex: "10",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.3",
                }}
              >
                We would love to create a memorable experience for your next
                celebratory occasion at Docksie, including:
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.3",
                }}
              >
                + Wedding Receptions
                <br />
                + Birthdays
                <br />
                + Corporate Events
                <br />
                + Christmas Parties
                <br />
                + Bridal Showers
                <br />
                + Christenings
                <br />
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  lineHeight: "1.3",
                }}
              >
                Our capacity is up to 80 seated guests or 120 for a standing
                function.
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  lineHeight: "1.3",
                }}
              >
                For more information on events at Dockside, simply complete the
                form.
              </Typography>
            </Box>
          </Box>
        </Box>
        <SideMenu />
      </Box>
      <Footer />
    </>
  );
};

export default Events;
