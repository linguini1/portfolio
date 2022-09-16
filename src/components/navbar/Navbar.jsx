import React from "react";
import "./Navbar.css";
import Social from "./Social";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";

export default function Navbar({ current_page, children }) {
  return (
    <nav id="navbar">
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
  );
}
