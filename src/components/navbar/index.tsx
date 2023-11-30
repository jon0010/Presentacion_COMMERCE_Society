import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import nodeLogo from "../../assets/node.png";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={nodeLogo} alt="nodelogo" width={60} className="ms-3" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/por-que-node">
                Por qué Node?
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/evaluacion">
                Evaluación y optimización
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/briefing">
                Briefing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
