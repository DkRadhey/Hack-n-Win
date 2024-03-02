import React from "react";
import Navbar from "./components/navbar/navbar";
import Venues from "./components/home_cards/Venues";
import Teachers from "./components/home_cards/Teachers";

const Home = () => {
    const optionsStyle = {
        width: "70%",
        height: "100%",
        margin: "4rem",
    };

    return (
        <div className="">
            <Navbar />
            <div
                className="options d-flex justify-content-evenly mx-auto"
                style={optionsStyle}
            >
                <Venues />
                <Teachers />
            </div>
        </div>
    );
};

export default Home;
