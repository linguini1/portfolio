import React from "react";
import { capitalize, handle_no_year } from "../../../utils/strformat";

export default function CVEducationItem({ item }) {
  // Format sub-line
  const institution_and_date = `${item.institution}, ${capitalize(
    item.location.city
  )}, ${item.location.province.toUpperCase()} | ${handle_no_year(item.year)}`;

  // SAR statements
  const sars = item.sars.map((sar, index) => <li key={index}>{sar}</li>);

  return (
    <div className="education">
      <h3>{item.certification}</h3>
      <h4>{institution_and_date}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
