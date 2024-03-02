import React from "react";
import "./Cards.css";

const Venues = () => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "18rem" }}
                />
                <div class="card-body">
                    <p
                        className="card-text"
                        style={{ font: "400 18px Krona One" }}
                    >
                        Venues
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Venues;
