import React from "react";
import { NavLink } from "react-router-dom";
import nodeLogo from "../../assets/node.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={nodeLogo} alt="nodelogo" width={60} className="ms-3" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end me-3"
          id="navbarNav"
        >
          <ul className="navbar-nav fw-semibold">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/por-que-node">
                Por qué Node?
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/empleabilidad">
                Empleabilidad
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/evaluacion">
                Evaluación
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
