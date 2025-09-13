import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";

const MenuSection = ({ data = [], title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {title && (
        <Typography
          sx={{
            mb: 2,
            fontSize: "1.2rem",
            fontWeight: "900",
          }}
        >
          {title}
        </Typography>
      )}
      {data.map((item, index) => (
        <Box key={index}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "900",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: "400",
            }}
          >
            {item.description}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: "400",
              marginBottom: "1rem",
            }}
          >
            {item.price}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MenuSection;
