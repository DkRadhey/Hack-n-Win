import React from "react";
import LectureHall from "../venue_cards/LectureHall";
import Labs from "../venue_cards/Labs";
import SeminarHalls from "../venue_cards/SeminarHalls";
import { NavLink } from "react-router-dom";

const Venues = () => {
    const venueStyle = {
        margin: "80px 0",
    };

    return (
        <div className="d-flex justify-content-evenly" style={venueStyle}>
            <NavLink
                to="/lecturehalls"
                style={{
                    "text-decoration": "none",
                    border: "none",
                }}
            >
                <LectureHall />
            </NavLink>
            <NavLink
                to="/labs"
                style={{
                    "text-decoration": "none",
                    border: "none",
                }}
            >
                <Labs />
            </NavLink>
            <NavLink
                to="/seminarhalls"
                style={{
                    "text-decoration": "none",
                    border: "none",
                }}
            >
                <SeminarHalls />
            </NavLink>
        </div>
    );
};

export default Venues;
