import React from "react";
import { capitalize, get_date } from "../../../utils/strformat";

export default function CVWorkExperience({ experience }) {
  // Subheader
  const workplace = `${experience.workplace}, ${capitalize(
    experience.location.city
  )}, ${experience.location.province.toUpperCase()}`;

  const date = get_date(experience);

  // SAR statements
  const sars = experience.sars.map((sar, index) => <li key={index}>{sar}</li>);

  return (
    <div className="work-experience">
      <h3>{experience.position}</h3>
      <h4>{`${workplace} | ${date}`}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
