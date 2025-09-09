import React from "react";
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        disableRipple
        sx={{
          all: "unset",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "900",
          color: i18n.language === "en" ? "#70bbd3" : "",
        }}
        // variant={i18n.language === "en" ? "contained" : "outlined"}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>

      <Button
        disableRipple
        sx={{
          all: "unset",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "900",
          color: i18n.language === "fr" ? "#70bbd3" : "",
        }}
        // variant={i18n.language === "fr" ? "contained" : "outlined"}
        onClick={() => changeLanguage("fr")}
      >
        FR
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
