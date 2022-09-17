import React from "react";
import { capitalize, get_date } from "../../../utils/strformat";

export default function CVWorkExperience({ item }) {
  // Subheader
  const workplace = `${item.workplace}, ${capitalize(
    item.location.city
  )}, ${item.location.province.toUpperCase()}`;
  const dates = get_date(item);

  // SAR statements
  const sars = item.sars.map((sar) => <li>{sar}</li>);

  return (
    <div className="work-experience">
      <h3>{item.position}</h3>
      <h4>{`${workplace} | ${dates[0]} - ${dates[1]}`}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
