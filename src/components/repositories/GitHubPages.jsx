import React from "react";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import GitHubPage from "./GitHubPage";

export default function GitHubPages() {
  const [repositories, loading] = useFetch(
    "https://api.github.com/users/linguini1/repos"
  );

  var pages;
  if (!loading) {
    // Filter so only repositories with pages are displayed
    const filtered_repositories = repositories.filter(
      (repo) => repo.has_pages == true
    );

    // Map to GitHubPage component
    pages = filtered_repositories.map((repo) => (
      <GitHubPage name={repo.name} url={repo.homepage} />
    ));
  } else {
    pages = <h3>Loading...</h3>;
  }

  return <div className="github-pages-wrapper">{pages}</div>;
}
