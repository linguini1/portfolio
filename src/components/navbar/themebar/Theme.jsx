import React from "react";

export default function Theme({ name, theme, mode }) {
  // Change theme
  function change_theme() {
    const rootStyles = document.documentElement.style;

    var light = "--light";
    var dark = "--dark";

    // Present mode from switching back to light when the theme is changed
    if (!mode) {
      dark = [light, (light = dark)][0]; // Swaps variables
    }

    rootStyles.setProperty(dark, theme.dark);
    rootStyles.setProperty(light, theme.light);
  }

  return (
    <div onClick={change_theme} className="nav-link theme">
      {name}
    </div>
  );
}
