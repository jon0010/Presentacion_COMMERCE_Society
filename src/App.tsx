import React from "react";
import {
  LandingPage,
  Home,
  Empleabilidad,
  Evaluacion,
  Briefing,
} from "./views";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/por-que-node" element={<Home />} />
        <Route path="/empleabilidad" element={<Empleabilidad />} />
        <Route path="/evaluacion" element={<Evaluacion />} />
        <Route path="/briefing" element={<Briefing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
