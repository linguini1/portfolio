import React from "react";
import "./DarkModeToggle.css";
import { useEffect } from "react";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  // Swap variables to change theme mode
  useEffect(() => {
    const computedStyles = getComputedStyle(document.documentElement);
    const rootStyles = document.documentElement.style;

    // Get current vals
    const dark = computedStyles.getPropertyValue("--dark");
    const light = computedStyles.getPropertyValue("--light");

    // Swap
    rootStyles.setProperty("--dark", light);
    rootStyles.setProperty("--light", dark);
  }, [darkMode]);

  return (
    <div id="dark-mode-toggle">
      <div
        id="toggle-ball"
        className={darkMode ? "" : "toggled"}
        onClick={() => setDarkMode(!darkMode)}
      ></div>
      <div id="toggle-socket"></div>
    </div>
  );
}
