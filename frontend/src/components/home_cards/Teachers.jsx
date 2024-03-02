import React from "react";
import "./Cards.css";

const Teachers = () => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://images.pexels.com/photos/5212321/pexels-photo-5212321.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "18rem" }}
                />
                <div class="card-body">
                    <p
                        className="card-text"
                        style={{ font: "400 18px Krona One" }}
                    >
                        Teachers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
