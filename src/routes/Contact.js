import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../components/SideMenu";

const Contact = () => {
  return (
    <>
      <SideMenu />
      <Box
        sx={{
          background: "green",
          height: "100vh",
          position: "relative",
        }}
      >
        Contact
      </Box>
    </>
  );
};

export default Contact;
