import React from "react";
import { format_month, get_date } from "../../../utils/strformat";

export default function CVAward({ award }) {
  // SAR statements
  const sars = award.sars.map((sar) => <li>{sar}</li>);

  return (
    <div className="award">
      <h3>{award.title}</h3>
      <h4>{`${format_month(award.date.month)} ${award.date.year}`}</h4>
      <ul className="sars">{sars}</ul>
    </div>
  );
}
