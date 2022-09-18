// Styles
import "./App.css";

// Hooks

// Components
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageLink from "./components/navbar/PageLink";

// Pages
import Home from "./pages/home/Home";
import CV from "./pages/cv/CV";

function App() {
  return (
    <div className="App">
      <div id="site-header">
        <h1 id="site-title">Matteo Golin</h1>
      </div>
      <Navbar>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/cv">CV</PageLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
