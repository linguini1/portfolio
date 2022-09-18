import React from "react";

export default function CVSkills({ skills }) {
  const create_list = (items) => {
    return items.map((item) => <li>{item}</li>);
  };

  // Tools
  const tools = create_list(skills.tools);

  // Abilities
  const abilities = create_list(skills.abilities);

  return (
    <div id="cv-skills-content">
      <div id="cv-tools">
        <h5>Tools</h5>
        <ul className="sars">{tools}</ul>
      </div>
      <div id="cv-abilities">
        <h5>Abilities</h5>
        <ul className="sars">{abilities}</ul>
      </div>
    </div>
  );
}
