import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/en.jsx";
import ar from "./locales/ar/ar.jsx";
import fr from "./locales/fr/fr.jsx";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
    fr: {
      translation: fr,
    },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = i18n.language;
document.documentElement.dir =
  i18n.language === "ar" ? "rtl" : "ltr";

export default i18n;