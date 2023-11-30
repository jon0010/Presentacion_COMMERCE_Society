import React from "react";
import { LandingPage, Home, Evaluacion, Briefing } from "./views";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="global-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/por-que-node" element={<Home />} />
        <Route path="/evaluacion" element={<Evaluacion />} />
        <Route path="/briefing" element={<Briefing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
