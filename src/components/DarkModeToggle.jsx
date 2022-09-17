import React from "react";
import "./DarkModeToggle.css";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true); // Light mode by default

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
    <div
      id="dark-mode-toggle"
      onClick={() => setDarkMode((darkMode) => !darkMode)}
    >
      <div className="inner"></div>
    </div>
  );
}
