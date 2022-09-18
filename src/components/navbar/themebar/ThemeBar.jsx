import React from "react";
import "./ThemeBar.css";
import Themes from "../../../assets/data/themes.json";

// Hooks
import { useState } from "react";

// Components
import DarkModeToggle from "./DarkModeToggle";
import Theme from "./Theme";

export default function ThemeBar() {
  const [darkMode, setDarkMode] = useState(true); // Light mode by default

  // Add all themes
  const themes = Themes.map((theme, index) => (
    <Theme name={theme.name} theme={theme} key={index} mode={darkMode} />
  ));

  return (
    <nav id="theme-bar">
      <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
      <div id="themes">{themes}</div>
    </nav>
  );
}
