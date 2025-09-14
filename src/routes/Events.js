import { Box, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";
import { useTranslation } from "react-i18next";
import docksideImageEvents from "../assets/images/dockside-events.jpg";
import ReservationForm from "../components/ReservationForm";

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
                top: isDesktop ? "1rem" : "0.4rem",
              }}
            >
              {t("Events & Functions")}
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
                zIndex: "1",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.3",
                }}
              >
                {t(
                  "At Dockside we would love to create a memorable experience for your next celebratory occasion, including:"
                )}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.3",
                }}
              >
                + {t("Wedding Receptions")}
                <br />+ {t("Birthdays")}
                <br />+ {t("Corporate Events")}
                <br />+ {t("Christmas Parties")}
                <br />+ {t("Bridal Showers")}
                <br />+ {t("Christenings")}
                <br />
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  lineHeight: "1.3",
                }}
              >
                {t(
                  "Our capacity is up to 80 seated guests or 120 for a standing function."
                )}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  lineHeight: "1.3",
                }}
              >
                {t(
                  "For more information on events at Dockside, simply complete the form."
                )}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#d6f5ff",
              width: "100",
              padding: "0.5rem 1rem 1.5rem 1rem",
            }}
          >
            <ReservationForm />
          </Box>
        </Box>
        <SideMenu />
      </Box>
      <Footer />
    </>
  );
};

export default Events;
