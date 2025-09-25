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
import { useTranslation } from "react-i18next";

const ReservationDialog = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 900, maxWidth: "100%", backgroundColor: "#d6f5ff" },
      }}
    >
      <DialogTitle
        sx={{
          width: "100",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {t("Make a reservation")}
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
        <ReservationForm />
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
