import React from "react";
import Resume from "../../assets/data/resume.json";
import "./CV.css";

// Components
import CVContact from "./components/CVContact";
import CVEducationItem from "./components/CVEducationItem";
import CVWorkExperience from "./components/CVWorkExperience";
import CVProject from "./components/CVProject";
import CVSkills from "./components/CVSkills";

export default function CV() {
  const profile = Resume.profile;

  // Education
  const education = Resume.education.map((item) => (
    <CVEducationItem item={item} />
  ));

  // Work experience
  const work_experience = Resume.experience.map((experience) => (
    <CVWorkExperience experience={experience} />
  ));

  // Projects
  const projects = Resume.projects.map((project) => (
    <CVProject project={project} />
  ));

  return (
    <main id="cv" className="page">
      <section id="cv-profile">
        <h1>{profile.name}</h1>
        <h1 className="subtitle">{profile.descriptor}</h1>
      </section>
      <CVContact contact={Resume.contact} />
      <section id="cv-education">
        <h2>Education</h2>
        {education}
      </section>
      <section id="cv-experience">
        <h2>Work Experience</h2>
        {work_experience}
      </section>
      <section id="cv-projects">
        <h2>Projects</h2>
        {projects}
      </section>
      <section id="cv-skills">
        <h2>Skills</h2>
        <CVSkills skills={Resume.skills} />
      </section>
    </main>
  );
}
