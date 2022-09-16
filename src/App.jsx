// Styles
import "./App.css";

// Hooks

// Components
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PageLink from "./components/navbar/PageLink";
import DarkModeToggle from "./components/DarkModeToggle";

// Pages
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div id="site-header">
        <h1 id="site-title">Matteo Golin</h1>
        <DarkModeToggle></DarkModeToggle>
      </div>
      <Navbar>
        <PageLink to="/">Home</PageLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
