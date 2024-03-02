import React from "react";
import Rings from "../rings/Rings";

const Background = () => {
    return (
        <div>
            <Rings width={400} color="#E7EFEE" border={12} id={1} />
            <Rings width={100} color="#dbf6f3" border={12} id={2} />
            <Rings width={800} color="#E7EFEE" border={90} id={3} />
            <Rings width={60} color="#dbf6f3a1" border={50} id={4} />
            <Rings width={700} color="#dbf6f3a1" border={50} id={5} />
        </div>
    );
};

export default Background;
