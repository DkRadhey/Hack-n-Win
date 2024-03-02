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
            <NavLink to="/lecturehalls">
                <LectureHall />
            </NavLink>
            <NavLink to="/labs">
                <Labs />
            </NavLink>
            <NavLink to="/seminarhalls">
                <SeminarHalls />
            </NavLink>
        </div>
    );
};

export default Venues;
