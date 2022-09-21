import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "./RepoCard.css";

export default function RepoCard({ repo }) {
  // Get repo languages
  const { data, loading } = useFetch(repo.languages_url);

  var languages;

  if (loading) {
    languages = "Loading...";
  } else {
    languages = Object.keys(data).map((language, index) => (
      <p key={index} className="repo-language">
        {language}
      </p>
    ));
  }

  // Make div clickable
  const open_repo_url = () => {
    window.open(repo.html_url, "-blank", "noopener,noreferrer");
  };

  return (
    <div className="repo-card" onClick={open_repo_url}>
      <h2>{repo.name}</h2>
      <h3>{repo.updated_at.slice(0, 10)}</h3>
      <p>{repo.description}</p>
      <div className="repo-languages">{languages}</div>
    </div>
  );
}
