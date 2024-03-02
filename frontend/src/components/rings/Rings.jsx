import React from "react";
import PropTypes from "prop-types";
import "./Rings.css";

const Rings = ({ width, color, border, id }) => {
    const ringStyle = {
        width: `${width}px`,
        height: `${width}px`,
        border: `${border}px solid ${color}`, // You can adjust the thickness here
        borderRadius: "50%",
        boxSizing: "border-box",
    };
    return (
        <div>
            <div className={`ring ring-${id}`} style={ringStyle}></div>
        </div>
    );
};

Rings.ReactPropTypes = {
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    border: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
};

export default Rings;
