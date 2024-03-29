import React from "react";
import Venues from "./components/home_cards/Venues";
import Teachers from "./components/home_cards/Teachers";
import { NavLink } from "react-router-dom";

const Home = () => {
    const optionsStyle = {
        width: "70%",
        height: "100%",
        margin: "4rem 0",
    };

    return (
        <div className="">
            <div
                className="options d-flex justify-content-evenly mx-auto"
                style={optionsStyle}
            >
                <NavLink
                    to="/venues"
                    style={{
                        "text-decoration": "none",
                        border: "none",
                        font: "400 18px Kronana One",
                    }}
                >
                    <Venues />
                </NavLink>
                <NavLink
                    to="/teachers"
                    style={{
                        "text-decoration": "none",
                        border: "none",
                    }}
                >
                    <Teachers />
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
