import React from "react";
import "./Teacher.css";

const Teacher = () => {
    const formStyle = {
        position: "absolute",
        top: "50%",
        width: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    // const btnStyle = {
    //     backgroundColor: "#009381",
    //     color: "#fff",
    //     cursor: "pointer", // Add a pointer cursor on hover
    //     transition: "background-color 0.3s ease, color 0.3s ease",
    // };

    return (
        <div>
            <form className="form-inline d-flex" style={formStyle}>
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
        </div>
    );
};

export default Teacher;
