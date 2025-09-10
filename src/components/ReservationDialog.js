import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReservationForm from "./ReservationForm";

const ReservationDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 800, maxWidth: "100%", backgroundColor: "#d6f5ff" },
      }}
    >
      <DialogTitle
        sx={{
          with: "100",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Make a Reservation
        <CloseIcon
          onClick={onClose}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: "0.6",
            },
          }}
        />
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          This is a simple dialog opened from a separate button.
        </DialogContentText> */}
        <ReservationForm />
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default ReservationDialog;
