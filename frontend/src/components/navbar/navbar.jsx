import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const navbar = ({ isLoggedIn }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: "62px",
                                height: "62px",
                                position: "relative",
                                top: "-6px",
                            }}
                        />
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
                        <span className="nav-item">
                            <NavLink className="login" to="/login">
                                {isLoggedIn ? "Logout" : "Login"}
                            </NavLink>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navbar;
