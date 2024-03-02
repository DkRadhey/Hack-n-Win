import "./App.css";
import Home from "./Home";
import Venues from "./components/pages/Venues";
import Navbar from "./components/navbar/navbar";
import Background from "./components/background/Background";
import Teacher from "./components/pages/Teacher";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LectureHalls from "./components/pages/LectureHalls";

function App() {
    return (
        <>
            <Router>
                <Navbar />
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
                    {/* <Route exact path="/labs" element={< />}></Route>
                    <Route exact path="/lecturehalls" element={<LectureHalls />}></Route> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
