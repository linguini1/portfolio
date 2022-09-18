import React from "react";
import { get_date } from "../../../utils/strformat";

export default function CVExtracurricular({ extracurricular }) {
  // Date
  const date = get_date(extracurricular);

  // SAR statements
  const sars = extracurricular.sars.map((sar, index) => (
    <li key={index}>{sar}</li>
  ));

  return (
    <div className="extracurricular">
      <h3>{extracurricular.title}</h3>
      <h4>{`${extracurricular.organization} | ${date}`}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
