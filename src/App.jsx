// Styles
import "./App.css";

// Hooks

// Components
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageLink from "./components/navbar/PageLink";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CV from "./pages/cv/CV";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <div id="site-header">
        <h1 id="site-title">Matteo Golin</h1>
      </div>
      <Navbar>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/cv">CV</PageLink>
        <PageLink to="/projects">Projects</PageLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
