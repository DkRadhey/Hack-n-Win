import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const Labs = () => {
    const [finalData, setFinalData] = useState([]);
    const weekday = "monday";
    const slot = 5;
    useEffect(() => {
        axios
            .get("/api/venues")
            .then((response) => {
                const data = response.data.data;
                const lectureRooms = data.filter(
                    (item) => item.category === "lecture hall"
                );
                const filteredData = lectureRooms.filter(
                    (room) => room.schedule[weekday][slot] === "free"
                );
                setFinalData(filteredData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            {finalData.length > 0 ? (
                <div className="container mx-auto" style={{ width: "60%" }}>
                    <h1 className="text-center"> Labs Available </h1>
                    <div className="justify-content-center row row-cols-2">
                        {finalData.map((item) => (
                            <Card
                                key={item._id}
                                room={item.roomNo}
                                block={item.blockNo}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <p>No free lecture halls available</p>
            )}
        </>
    );
};

export default Labs;
