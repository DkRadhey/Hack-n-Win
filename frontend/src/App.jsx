import "./App.css";
import React, { useState } from "react";
import Home from "./Home";
import Venues from "./components/pages/Venues";
import Navbar from "./components/navbar/navbar";
import Background from "./components/background/Background";
import Teacher from "./components/pages/Teacher";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LectureHalls from "./components/pages/LectureHalls";
import SeminarHalls from "./components/pages/SeminarHalls";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Labs from "./components/pages/Labs";
import Login from "./components/login/Login";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        setLoggedIn(true);
    };

    // const handleLogout = () => {
    //     setLoggedIn(false);
    // };
    return (
        <>
            <Router>
                <Navbar isLoggedIn={isLoggedIn} />
                <Background />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/venues" element={<Venues />} />
                    <Route exact path="/teachers" element={<Teacher />}></Route>
                    <Route
                        exact
                        path="/lecturehalls"
                        element={<LectureHalls />}
                    ></Route>
                    <Route exact path="/labs" element={<Labs />}></Route>
                    <Route
                        exact
                        path="/seminarhalls"
                        element={<SeminarHalls />}
                    ></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route
                        exact
                        path="/contact-us"
                        element={<ContactUs />}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        element={<Login onLogin={handleLogin} />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
