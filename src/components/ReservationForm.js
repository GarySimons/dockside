import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

const ReservationForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    date: null,
    time: null,
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (newDate) => {
    setFormData((prev) => ({
      ...prev,
      date: newDate,
    }));
  };

  const handleTimeChange = (newTime) => {
    setFormData((prev) => ({
      ...prev,
      time: newTime,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
          }}
        >
          <TextField
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "grey",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey",
              },
            }}
            label={t("Name")}
            name="name"
            size="small"
            autoComplete="off"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "grey",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey",
              },
            }}
            label={t("Email")}
            name="email"
            type="email"
            size="small"
            autoComplete="off"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
          />

          <TextField
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "grey",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey",
              },
            }}
            label={t("Phone Number")}
            name="phone"
            type="tel"
            size="small"
            autoComplete="off"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
          }}
        >
          <TextField
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "grey",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey",
              },
            }}
            label={t("Party Size")}
            name="partySize"
            type="number"
            size="small"
            autoComplete="off"
            fullWidth
            value={formData.partySize}
            onChange={handleChange}
          />
          <DatePicker
            label={t("Select Date")}
            value={formData.date}
            onChange={handleDateChange}
            minDate={dayjs()}
            slotProps={{
              textField: {
                required: true,
                size: "small",
                fullWidth: true,
                sx: {
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "grey" },
                    "&:hover fieldset": { borderColor: "grey" },
                    "&.Mui-focused fieldset": { borderColor: "grey" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "grey" },
                },
              },
            }}
          />

          <TimePicker
            label={t("Select Time")}
            value={formData.time}
            onChange={handleTimeChange}
            slotProps={{
              textField: {
                required: true,
                size: "small",
                fullWidth: true,
                sx: {
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "grey" },
                    "&:hover fieldset": { borderColor: "grey" },
                    "&.Mui-focused fieldset": { borderColor: "grey" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "grey" },
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
          }}
        >
          <TextField
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "grey",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey",
              },
            }}
            label={t("Extra Comments")}
            name="comments"
            autoComplete="off"
            multiline
            rows={4}
            fullWidth
            value={formData.comments}
            onChange={handleChange}
          />
        </Box>

        <Button
          type="submit"
          disableRipple
          sx={{
            all: "unset",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            border: "0.05rem solid #777777",
            color: "#ffffff",
            backgroundColor: "#777777",
            borderRadius: "0.2rem",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#777777",
            },
          }}
        >
          {t("Submit Request")}
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default ReservationForm;
