import React from "react";
import "./Home.css";

// Components
import KeyboardShortcut from "../../components/KeyboardShortcut";

export default function Home() {
  return (
    <main id="home" className="page">
      <h1>Home</h1>
      <section id="site-description">
        <p>
          This a portfolio website. It is currently under construction and is
          not optimized for mobile.
        </p>
        <p>
          There is nothing else to say at the moment because this is an
          unfinished work.
        </p>
        <p>
          You should probably check out my socials and play around with the
          themes, though.
        </p>
      </section>
      <section id="keyboard-shortcuts">
        <h2>Keyboard Shortcuts</h2>
        <KeyboardShortcut
          key_val="KeyD"
          modifier={"shift"}
          functionality="Toggle dark mode."
        />
        <KeyboardShortcut
          key_val="KeyM"
          modifier={"shift"}
          functionality="Toggle the theme menu."
        />
      </section>
    </main>
  );
}
