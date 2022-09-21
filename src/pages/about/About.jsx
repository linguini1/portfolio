import React from "react";
import "./About.css";

// Components
import Repositories from "../../components/repositories/Repositories";

export default function About() {
  return (
    <main id="about" className="page">
      <section id="bio">
        <h1>About Me</h1>
        <p>
          I'm a computer systems engineering student at{" "}
          <a href="https://carleton.ca/">Carleton University</a> with a passion
          for programming, mathematics, graphic design and pixel art! I grew up
          in Ottawa, Ontario for most of my life, but was born in Edmonton,
          Alberta.
        </p>
        <p>
          Python is my tool of choice, but I know several other programming
          languages. I also speak a couple <i>real</i> languages, including
          English, French and Russian.
        </p>
        <p>
          What I love most about computer systems, and computers in general, is
          being able to have my passions collide.
        </p>
        <ul className="bulleted">
          <li>Graphic design in web development</li>
          <li>Mathematics in almost every single algorithm out there</li>
          <li>Physics in game engines and simulations</li>
          <li>Pixel art in video game design or image generation</li>
          <li>Literature in databases or web scraping</li>
          <li>And the list goes on...</li>
        </ul>
      </section>
      <section id="repositories">
        <h2>GitHub Repositories</h2>
        <Repositories />
      </section>
    </main>
  );
}
