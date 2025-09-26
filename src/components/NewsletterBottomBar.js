import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function NewsletterBottomBar() {
  const [open, setOpen] = React.useState(false);

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
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          backgroundColor: "pink",
          height: "100%",
          width: "90vw",
        }}
      ></Box>
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
