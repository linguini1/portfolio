import React from "react";
import Resume from "../../assets/data/resume.json";
import "./CV.css";

// Components
import CVContact from "./components/CVContact";
import CVEducationItem from "./components/CVEducationItem";
import CVWorkExperience from "./components/CVWorkExperience";
import CVProject from "./components/CVProject";
import CVSkills from "./components/CVSkills";
import CVAward from "./components/CVAward";
import CVExtracurricular from "./components/CVExtracurricular";

export default function CV() {
  const profile = Resume.profile;

  // Education
  const education = Resume.education.map((item, index) => (
    <CVEducationItem key={index} item={item} />
  ));

  // Work experience
  const work_experience = Resume.experience.map((experience, index) => (
    <CVWorkExperience key={index} experience={experience} />
  ));

  // Projects
  const projects = Resume.projects.map((project, index) => (
    <CVProject key={index} project={project} />
  ));

  // Awards
  const awards = Resume.awards.map((award, index) => (
    <CVAward key={index} award={award} />
  ));

  // Extracurriculars
  const extracurriculars = Resume.extracurriculars.map(
    (extracurricular, index) => (
      <CVExtracurricular key={index} extracurricular={extracurricular} />
    )
  );

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
      <section id="cv-extracurriculars">
        <h2>Extracurriculars</h2>
        {extracurriculars}
      </section>
      <section id="cv-skills">
        <h2>Skills</h2>
        <CVSkills skills={Resume.skills} />
      </section>
      <section id="cv-awards">
        <h2>Awards</h2>
        {awards}
      </section>
    </main>
  );
}
