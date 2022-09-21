import React from "react";
import "./ThemeBar.css";
import Themes from "../../../assets/data/themes.json";

// Hooks
import { useState } from "react";

// Components
import DarkModeToggle from "./DarkModeToggle";
import Theme from "./Theme";
import { useKey } from "../../../hooks/useKey";

export default function ThemeBar({ darkMode }) {
  // Add all themes
  const themes = Themes.map((theme, index) => (
    <Theme name={theme.name} theme={theme} key={index} mode={darkMode} />
  ));

  // Menu is hidden by default
  const [hidden, setHidden] = useState(true);

  // Function to toggle between hidden and not hidden modes of menu
  const toggle_hidden = () => {
    // Toggle the hidden class
    setHidden(!hidden);

    // Make body not scrollable
    if (hidden) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  // Display menu when the hotkey Shift + M is pressed
  useKey("KeyM", "shift", toggle_hidden);

  // Close menu if user clicks outside it
  const close_menu = (event) => {
    if (event.target.id == "theme-bar-modal") {
      toggle_hidden();
    }
  };

  return (
    <div
      id="theme-bar-modal"
      className={hidden ? "hidden" : ""}
      onClick={close_menu}
    >
      <nav id="theme-bar">
        <div id="themes">{themes}</div>
      </nav>
    </div>
  );
}
