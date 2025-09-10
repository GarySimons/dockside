import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const MainLogo = () => {
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
          fontSize: isMobile ? "2rem" : "3rem",
          position: "absolute",
          top: isMobile ? "2.5rem" : "1.5rem",
          left: "2rem",
          fontWeight: "900",
          letterSpacing: "0.05rem",
          zIndex: "1",
        }}
      >
        Dockside
      </Typography>
    </Link>
  );
};

export default MainLogo;
