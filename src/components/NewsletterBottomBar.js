import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewsletterEmailForm from "./NewsletterEmailForm";

export default function NewsletterBottomBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        height: 300,
        display: "flex",
        justifyContent: "center",
      }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "yellow",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "90vw",
            maxWidth: "30rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "pink",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "700",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Join the Dockside Newsletter
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: "400",
              lineHeight: "1.3",
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            No Spam, we promise
          </Typography>
          <NewsletterEmailForm toggleDrawer={toggleDrawer} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button
        disableRipple
        sx={{
          all: "unset",
          textDecoration: "underline",
          fontSize: "0.8rem",
          cursor: "pointer",
          fontWeight: "800",
          "&:hover": {
            opacity: "0.6",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        Sign Me Up
      </Button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
