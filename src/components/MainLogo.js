import { Typography } from "@mui/material";
import React from "react";

const MainLogo = () => {
  return (
    <Typography
      sx={{
        fontSize: "3rem",
        position: "absolute",
        top: "1.5rem",
        left: "2rem",
        fontWeight: "900",
      }}
    >
      Dockside
    </Typography>
  );
};

export default MainLogo;
