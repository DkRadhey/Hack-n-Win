import React from "react";
import LectureHall from "../venue_cards/LectureHall";
import Labs from "../venue_cards/Labs";
import SeminarHalls from "../venue_cards/SeminarHalls";

const Venues = () => {
    const venueStyle = {
        margin: "80px 0",
    };

    return (
        <div className="d-flex justify-content-evenly" style={venueStyle}>
            <LectureHall />
            <Labs />
            <SeminarHalls />
        </div>
    );
};

export default Venues;
