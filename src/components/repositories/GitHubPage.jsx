import React from "react";
import "./GitHubPage.css";

export default function GitHubPage({ name, url }) {
  return (
    <li className="github-page">
      <a href={url}>{name}</a>
    </li>
  );
}
