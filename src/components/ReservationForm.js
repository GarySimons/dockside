import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
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
  const [submitMessage, setSubmitMessage] = useState(false);

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
    setFormData({
      name: "",
      email: "",
      phone: "",
      partySize: "",
      date: null,
      time: null,
      comments: "",
    });
    setSubmitMessage(true);
    console.log("submitMessage:", submitMessage);
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
            inputProps={{ min: 0 }}
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
                autoComplete: "off",
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

              // 🔥 Pop-up calendar styling
              popper: {
                sx: {
                  "& .MuiPaper-root": {
                    borderRadius: "8px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff", // or dark if themed
                    mt: 1,
                  },
                  "& .MuiPickersDay-root": {
                    fontSize: "0.85rem",
                    color: "#333",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#777777 !important",
                    color: "#fff",
                  },
                  "& .MuiPickersDay-root:hover": {
                    backgroundColor: "#eeeeee",
                  },
                },
              },
            }}
          />

          <TimePicker
            label={t("Select Time")}
            value={formData.time}
            onChange={handleTimeChange}
            minTime={dayjs().hour(11).minute(0)} // 11:00 AM
            maxTime={dayjs().hour(21).minute(30)} // 10:00 PM
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

              popper: {
                sx: {
                  "& .MuiPaper-root": {
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "#fff",
                    mt: 1,
                  },
                  "& .MuiClock-root": {
                    backgroundColor: "#f9f9f9",
                  },
                  "& .MuiClockNumber-root": {
                    color: "#333",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#777777 !important",
                    color: "#fff !important",
                  },
                  // 🎯 Style OK and Cancel buttons
                  "& .MuiDialogActions-root": {
                    justifyContent: "space-between",
                    padding: "8px 16px",
                  },
                  "& .MuiDialogActions-root .MuiButton-root": {
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "4px",
                  },
                  "& .MuiDialogActions-root .MuiButton-root:nth-of-type(1)": {
                    color: "#777777",
                  },
                  "& .MuiDialogActions-root .MuiButton-root:nth-of-type(2)": {
                    backgroundColor: "#777777",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#5c5c5c",
                    },
                  },
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
            padding: "0.5rem",
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
        {submitMessage && (
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "#3d393a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.5rem",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "700",
                lineHeight: "1.3",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              {t("Thank you for your reservation enquiry")}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: "400",
                lineHeight: "1.3",
                textAlign: "center",
                margin: "1rem 0 0 0",
                color: "#ffffff",
              }}
            >
              {t("We will email you to confirm your booking")}
            </Typography>
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default ReservationForm;
