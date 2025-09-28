import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewsletterEmailForm from "./NewsletterEmailForm";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

export default function NewsletterBottomBar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        height: "18rem",
        display: "flex",
        justifyContent: "center",
      }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          height: "100%",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#488599",
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
          }}
        >
          <CloseIcon
            onClick={toggleDrawer(false)}
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
              color: "#ffffff",
              "&:hover": {
                opacity: "0.6",
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "700",
              lineHeight: "1.3",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            {t("Join the Dockside Newsletter")}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: "400",
              lineHeight: "1.3",
              textAlign: "center",
              margin: "1rem 0",
              color: "#ffffff",
            }}
          >
            {t("No Spam, we promise")}
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
            textDecoration: "underline",
            opacity: 0.6,
          },
        }}
        onClick={toggleDrawer(true)}
      >
        {t("Sign Me Up")}
      </Button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
