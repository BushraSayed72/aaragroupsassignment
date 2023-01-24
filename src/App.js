import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Client from "./Components/Client";
import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <div>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className={isNavOpen ? "sidebar-open" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Client" element={<Client />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
