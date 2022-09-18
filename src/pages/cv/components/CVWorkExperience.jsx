import React from "react";
import { capitalize, get_date } from "../../../utils/strformat";

export default function CVWorkExperience({ experience }) {
  // Subheader
  const workplace = `${experience.workplace}, ${capitalize(
    experience.location.city
  )}, ${experience.location.province.toUpperCase()}`;
  const dates = get_date(experience);

  // SAR statements
  const sars = experience.sars.map((sar) => <li>{sar}</li>);

  return (
    <div className="work-experience">
      <h3>{experience.position}</h3>
      <h4>{`${workplace} | ${dates[0]} - ${dates[1]}`}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
