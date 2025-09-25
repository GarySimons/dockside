import React from "react";
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  return (
    <Stack direction="row" spacing={1}>
      <Button
        disableRipple
        sx={{
          all: "unset",
          cursor: "pointer",
          fontSize: "0.8rem",
          fontWeight: "900",
          border:
            i18n.language === "en"
              ? "0.08rem #ffffff solid"
              : "0.08rem #70bbd3 solid",
          padding: "0.25rem 0",
          width: "5.5rem",
          textAlign: "center",
          color: i18n.language === "en" ? "" : "#70bbd3",
        }}
        onClick={() => changeLanguage("en")}
      >
        {t("English")}
      </Button>

      <Button
        disableRipple
        sx={{
          all: "unset",
          cursor: "pointer",
          fontSize: "0.8rem",
          fontWeight: "700",
          border:
            i18n.language === "fr"
              ? "0.08rem #ffffff solid"
              : "0.08rem #70bbd3 solid",
          padding: "0.25rem 0",
          width: "5.5rem",
          textAlign: "center",
          color: i18n.language === "fr" ? "" : "#70bbd3",
        }}
        onClick={() => changeLanguage("fr")}
      >
        {t("French")}
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
