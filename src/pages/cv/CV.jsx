import React from "react";
import "./CV.css";

// Components

export default function CV() {
  return (
    <main id="cv" className="page">
      <h1>Resume</h1>
      <iframe
        id="resume"
        title="resume"
        src="https://drive.google.com/file/d/1aBEuaLov5asqfqN0pCs10lqzlqjLLrFN/preview"
        allow="autoplay"
      />
    </main>
  );
}
