import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Venues from "./components/pages/Venues";
import Navbar from "./components/navbar/navbar";
import Background from "./components/background/Background";
import Teacher from "./components/pages/Teacher";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Background />
            {/* <Home /> */}
            {/* <Venues /> */}
            <Teacher />
        </>
    );
}

export default App;
