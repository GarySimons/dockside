import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NewsletterEmailForm = ({ toggleDrawer }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const { t } = useTranslation();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const hasError = submitted && !isValidEmail(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (isValidEmail(email)) {
      console.log("Submitted email:", email);
      setEmail("");
      setShowThankYouMessage(true);
      setSubmitted(false);
    } else {
      console.log("Invalid email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={t("Email")}
        name="email"
        type="email"
        size="small"
        autoComplete="off"
        fullWidth
        value={email}
        onChange={handleChange}
        required
        error={hasError}
        helperText={hasError ? "Please enter a valid email address." : ""}
        sx={{
          flex: 1,
          mt: 1,
          color: "#ffffff",
          "& .MuiOutlinedInput-root": {
            fontSize: "0.8rem",
            color: "#ffffff",
            height: 36,
            "& input": {
              padding: "8px",
            },
            "& fieldset": {
              borderColor: hasError ? "red" : "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: hasError ? "red" : "#ffffff",
            },
            "&.Mui-focused fieldset": {
              borderColor: hasError ? "red" : "#ffffff",
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "0.8rem",
            color: "#ffffff",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: hasError ? "red" : "#ffffff",
          },
          "& .MuiFormHelperText-root": {
            fontSize: "0.7rem",
            color: "red",
          },
        }}
      />
      {showThankYouMessage && (
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
            {t("Thank you for joining")}
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
            {t("We look forward to sending you exciting content.")}
          </Typography>
          <Typography
            onClick={toggleDrawer(false)}
            sx={{
              fontSize: "0.8rem",
              fontWeight: "400",
              maxWidth: "90vw",
              lineHeight: "1.3",
              textAlign: "center",
              margin: "0.5rem 0 0 0",
              color: "#ffffff",
              textDecoration: "underline",
            }}
          >
            {t("Close")}
          </Typography>
        </Box>
      )}

      <Button
        type="submit"
        disableRipple
        sx={{
          all: "unset",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem",
          border: "0.05rem solid #ffffff",
          color: "#000000",
          backgroundColor: "#ffffff",
          borderRadius: "0.2rem",
          width: "25rem",
          marginTop: "1rem",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#ffffff",
          },
        }}
      >
        {t("Join")}
      </Button>
    </form>
  );
};

export default NewsletterEmailForm;
