import React from "react";
import "./Social.css";

export default function Social({ name, icon, link }) {
  return (
    <a href={link} className="social-link nav-link">
      {icon}
    </a>
  );
}
