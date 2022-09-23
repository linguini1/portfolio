import React from "react";
import "./Repositories.css";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import RepoCard from "./RepoCard";

export default function Repositories() {
  const [data, loading] = useFetch(
    "https://api.github.com/users/linguini1/repos"
  );

  var repo_cards;
  if (loading) {
    repo_cards = <h2>Loading...</h2>;
  } else {
    // Do not show the biography repo
    const filtered_data = data.filter((repo) => repo.name != "linguini1");
    filtered_data.sort((a, b) =>
      a.updated_at.slice(0, 4) < b.updated_at.slice(0, 4) ? 1 : -1
    ); // Sort from most recent

    // Turn into cards
    repo_cards = filtered_data.map((repo, index) => (
      <RepoCard key={index} repo={repo} />
    ));
  }

  return <div className="repositories-wrapper">{repo_cards}</div>;
}
