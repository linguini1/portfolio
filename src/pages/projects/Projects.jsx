import React from "react";
import "./Projects.css";

// Components
import Repositories from "../../components/repositories/Repositories";
import GitHubPages from "../../components/repositories/GitHubPages";

export default function Projects() {
  return (
    <main className="page" id="projects">
      <section id="projects-description">
        <h1>Projects</h1>
        <p>Here are all my publicly visibly projects on GitHub.</p>
      </section>
      <section id="github-pages">
        <h2>Browser Accessible Projects</h2>
        <GitHubPages />
      </section>
      <section id="repositories">
        <h2>GitHub Repositories</h2>
        <Repositories />
      </section>
    </main>
  );
}
