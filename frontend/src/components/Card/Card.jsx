import React from "react";

const Card = ({ room, block }) => {
    return (
        <>
            <div className="card  p-0 mx-4 my-4" style={{ width: "12rem" }}>
                <img
                    src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "8rem" }}
                />
                <div class="card-body">
                    <p className="card-text">
                        {block} Room No. {room}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Card;
