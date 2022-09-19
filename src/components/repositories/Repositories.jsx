import React from "react";
import "./Repositories.css";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import RepoCard from "./RepoCard";

export default function Repositories() {
  const { data, loading } = useFetch(
    "https://api.github.com/users/linguini1/repos"
  );

  var repo_cards;
  if (loading) {
    repo_cards = <h2>Loading...</h2>;
  } else {
    repo_cards = data.map((repo, index) => (
      <RepoCard key={index} repo={repo} />
    ));
  }

  return <div className="repositories-wrapper">{repo_cards}</div>;
}
