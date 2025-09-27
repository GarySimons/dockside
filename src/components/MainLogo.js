import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const MainLogo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          fontSize: isMobile ? "13vw" : "11vw",
          position: "absolute",
          top: isMobile ? "40%" : "37%",
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
