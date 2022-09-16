import "./App.css";
// Hooks

// Components
import Navbar from "./components/navbar/Navbar";
import { Link, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div id="site-header">
        <h1 id="site-title">Matteo Golin</h1>
      </div>
      <Navbar>
        <Link to="/">Home</Link>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
