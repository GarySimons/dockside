import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const SideLogo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Plaster",
          fontSize: isMobile ? "2rem" : "3rem",
          position: "absolute",
          top: isMobile ? "2.5rem" : "1.5rem",
          left: "2rem",
          fontWeight: "900",
          letterSpacing: isMobile ? "-0.1rem" : "-0.15rem",
          zIndex: "1",
        }}
      >
        Dockside
      </Typography>
    </Link>
  );
};

export default SideLogo;
