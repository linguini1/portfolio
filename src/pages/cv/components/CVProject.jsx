import React from "react";
import { handle_no_year } from "../../../utils/strformat";

export default function CVProject({ project }) {
  // SAR statements
  const sars = project.sars.map((sar, index) => <li key={index}>{sar}</li>);

  // Title (link or no link)
  var title = <h3>{project.title}</h3>;
  if (project.link) {
    title = (
      <a className="wrapper" href={project.link}>
        {title}
      </a>
    );
  }

  return (
    <div className="cv-project">
      {title}
      <h4>{handle_no_year(project.year)}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
