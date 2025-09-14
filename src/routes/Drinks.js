import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuSection from "../components/MenuSelection";
import docksideImageStater from "../assets/images/dockside-starter.jpg";
import docksideImageLunch from "../assets/images/dockside-lunch.jpg";
import docksideImageDessert from "../assets/images/dockside-dessert.jpg";
import starterData from "../assets/data/menuStarter.json";
import mainsData from "../assets/data/menuMains.json";
import dessertData from "../assets/data/menuDessert.json";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Drinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
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
              padding: "0",
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "2.2rem",
                fontWeight: "600",
                lineHeight: "1.2",
                position: "absolute",
                left: "0",
                top: isDesktop ? "1rem" : "0.4rem",
                zIndex: "3",
              }}
            >
              {t("Drinks")}
            </Typography>
            <CustomTabPanel value={value} index={0}>
              <Box
                sx={{
                  width: "100",
                  height: "30vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  position: "relative",
                  padding: "0",
                }}
              >
                <img
                  src={docksideImageStater}
                  alt="Starter"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box
                sx={{
                  width: "100",
                  height: "30vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={docksideImageLunch}
                  alt="Lunch"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Box
                sx={{
                  width: "100",
                  height: "30vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={docksideImageDessert}
                  alt="Dessert"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </CustomTabPanel>
          </Box>
          <Box sx={{ width: "100" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs"
                textColor="#ffffff"
                indicatorColor="#70bbd3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "",
                    height: 3,
                  },
                }}
              >
                <Tab
                  label={t("Starters")}
                  {...a11yProps(0)}
                  disableRipple
                  sx={{
                    flex: 1,
                    fontWeight: "600",
                    fontSize: isMobile ? "0.9rem" : "1.1rem",
                    textTransform: "none",
                    color: " #488599",
                    borderRight: "0.1rem solid #ffffff",
                    minHeight: "1rem",
                    height: "1rem",
                    "&.Mui-selected": {
                      color: "#ffffff",
                    },
                  }}
                />
                <Tab
                  label={t("Mains")}
                  {...a11yProps(1)}
                  disableRipple
                  sx={{
                    flex: 1,
                    fontWeight: "600",
                    fontSize: isMobile ? "0.9rem" : "1.1rem",
                    textTransform: "none",
                    color: " #488599",
                    borderRight: "0.1rem solid #ffffff",
                    minHeight: "1rem",
                    height: "1rem",
                    "&.Mui-selected": {
                      color: "#ffffff",
                    },
                  }}
                />
                <Tab
                  label={t("Desserts")}
                  {...a11yProps(2)}
                  disableRipple
                  sx={{
                    flex: 1,
                    fontWeight: "600",
                    fontSize: isMobile ? "0.9rem" : "1.1rem",
                    textTransform: "none",
                    color: " #488599",
                    minHeight: "1rem",
                    height: "1rem",
                    "&.Mui-selected": {
                      color: "#ffffff",
                    },
                  }}
                />
              </Tabs>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <MenuSection data={starterData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <MenuSection data={mainsData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <MenuSection data={dessertData} />
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
      <SideMenu />

      <Footer />
    </>
  );
};

export default Drinks;
