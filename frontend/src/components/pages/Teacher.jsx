import React, { useState } from "react";
import "./Teacher.css";

const Teacher = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const formStyle = {
        position: "absolute",
        top: formSubmitted ? "20%" : "50%",
        width: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    const cardStyle = {
        width: "18rem",
        height: "18rem",
        "margin-top": "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div>
            <form
                className="form-inline d-flex"
                style={formStyle}
                onSubmit={handleSubmit}
            >
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Teacher Name or Employee Id"
                    aria-label="Search"
                />
                <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
            </form>
            {formSubmitted && (
                <div className="card" style={cardStyle}>
                    <img
                        src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="card-img-top"
                        alt="..."
                        style={{ height: "18rem" }}
                    />
                    <div className="card-body">
                        <p className="card-text">Labs</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Teacher;
