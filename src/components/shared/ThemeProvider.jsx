import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Check local storage first, default to light mode if nothing is saved
  const [theme, setTheme] = useState(() => localStorage.getItem("app-theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove old classes and add the current theme class
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    // Save to local storage for persistence
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // Provide a toggle function to any component that asks for it
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to easily grab the theme anywhere in the app
export const useTheme = () => useContext(ThemeContext);