import React from "react";
import "./Navbar.css";

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Hack-n-Win
                    </a>
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navbar;