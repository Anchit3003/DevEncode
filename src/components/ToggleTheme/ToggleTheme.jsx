import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check if theme is saved in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    // Default: check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme to HTML
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ToggleTheme;
