import React from "react";
import "./Navbar.css";

// Hooks
import { useState } from "react";

// Components
import Social from "./Social";
import ThemeBar from "./themebar/ThemeBar";
import DarkModeToggle from "./themebar/DarkModeToggle";

// Icons
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";

export default function Navbar({ current_page, children }) {
  const [darkMode, setDarkMode] = useState(false); // Light mode by default
  console.log(darkMode);

  return (
    <>
      <nav id="navbar">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <div id="pages">{children}</div>
        <div id="socials">
          <Social
            name="GitHub"
            icon={<GitHub />}
            link="https://github.com/linguini1"
          />
          <Social
            name="LinkedIn"
            icon={<LinkedIn />}
            link="https://www.linkedin.com/in/matteo-golin-94118021b/"
          />
        </div>
      </nav>
      <ThemeBar darkMode={darkMode} />
    </>
  );
}
