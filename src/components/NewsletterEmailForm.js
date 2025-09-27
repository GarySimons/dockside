import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const NewsletterEmailForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

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
        label="Email"
        name="email"
        type="email"
        size="small"
        fullWidth
        value={email}
        onChange={handleChange}
        required
        error={hasError}
        helperText={hasError ? "Please enter a valid email address." : ""}
        sx={{
          flex: 1,
          mt: 1,
          "& .MuiOutlinedInput-root": {
            fontSize: "0.8rem",
            height: 36,
            "& input": {
              padding: "8px",
            },
            "& fieldset": {
              borderColor: hasError ? "red" : "grey",
            },
            "&:hover fieldset": {
              borderColor: hasError ? "red" : "grey",
            },
            "&.Mui-focused fieldset": {
              borderColor: hasError ? "red" : "grey",
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "0.8rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: hasError ? "red" : "grey",
          },
          "& .MuiFormHelperText-root": {
            fontSize: "0.7rem",
            color: "red",
          },
        }}
      />
      {showThankYouMessage && <h1>hello</h1>}

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
          width: "25rem",
          marginTop: "1.5rem",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#777777",
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default NewsletterEmailForm;
