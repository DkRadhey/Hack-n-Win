import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        EduPlex
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navbar;
