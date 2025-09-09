import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const StyledLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography
        sx={{
          color: isActive ? "#70bbd3" : "#ffffff",
          fontSize: "1.3rem",
          textDecoration: "none",
          fontWeight: "500",
          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default StyledLink;
