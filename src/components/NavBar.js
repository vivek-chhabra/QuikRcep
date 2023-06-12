import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function NavBar() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? "NavBar dark" : "NavBar"}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
                <div className="container-fluid container ">
                    <NavLink to="/" className="navbar-brand pb-2">
                        QuikRecp
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/create" className="nav-link active">
                                    MakeOne
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                        <div className="modes" onClick={toggleDarkMode}>
                            {isDarkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
