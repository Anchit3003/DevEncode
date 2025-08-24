import React from "react";
//import i18n from "i18next";
import { useTranslation } from "react-i18next";
const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

const ChangeLanguage = () => {
    const {t,i18n} = useTranslation();
  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };
  return (
    <div>
      <select
        className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ChangeLanguage;
