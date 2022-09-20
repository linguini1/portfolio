import React from "react";
import "./DarkModeToggle.css";
import { useEffect } from "react";
import { useKey } from "../../../hooks/useKey";

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

  // Function for switching between dark and light modes
  const switch_modes = () => {
    setDarkMode(!darkMode);
  };

  // Hotkey to switch modes is Shift + D
  const ctrl_d = useKey("KeyD", "shift", switch_modes);

  return (
    <div id="dark-mode-toggle">
      <div
        id="toggle-ball"
        className={darkMode ? "" : "toggled"}
        onClick={switch_modes}
      ></div>
      <div id="toggle-socket"></div>
    </div>
  );
}
