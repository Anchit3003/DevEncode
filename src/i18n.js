import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    debug: true,
    react: {
      useSuspense: true, // Optional: for lazy loading
    },
  });

export default i18n;
