import React, { useEffect } from "react";
import img from "../../assets/logo.png";
import img2 from "../../assets/aboutImg2.jpg";
import img3 from "../../assets/aboutImg3.jpg";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();

    useEffect(() => {
        // Disable overflow-y on "/about" route
        if (location.pathname === "/about") {
            document.body.classList.add("disable-overflow");
        } else {
            document.body.classList.remove("disable-overflow");
        }

        // Clean up effect on component unmount
        return () => {
            document.body.classList.remove("disable-overflow");
        };
    }, [location.pathname]);

    const headingStyle = {
        textAlign: "center",
        font: "400 40px Krona One",
    };

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    const missionContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    const imageStyle = {
        width: "280px",
        height: "280px",
        marginLeft: "20px",
        borderRadius: "50%",
    };

    const valuesContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    return (
        <div style={{ "max-width": "80%", margin: "auto" }}>
            <div className="heading" style={headingStyle}>
                About
            </div>
            <div style={containerStyle}>
                <img
                    src={img}
                    alt="Logo"
                    style={{
                        width: "280px",
                        height: "280px",
                        marginRight: "20px",
                        borderRadius: "50%",
                    }}
                />
                <div
                    className="management"
                    style={{ flex: 1, font: "300 22px Krona One" }}
                >
                    About Our Management
                    <div
                        className="management-1 my-2"
                        style={{ font: "500 19px Roboto" }}
                    >
                        How to Find your Faculty
                        <div
                            className="my-2"
                            style={{ font: "400 16px Roboto" }}
                        >
                            Welcome to Eduplus, your one-stop platform for
                            streamlining education management! We are dedicated
                            to empowering students with the tools and resources
                            they need to excel in their academic pursuits.
                        </div>
                    </div>
                </div>
            </div>
            <div style={missionContainerStyle}>
                <div style={{ flex: 1 }}>
                    <div
                        className="mission-heading"
                        style={{ font: "500 22px Roboto" }}
                    >
                        Our Mission:
                    </div>
                    <div
                        className="mission-content my-4"
                        style={{ font: "400 16px Roboto" }}
                    >
                        Simplify student-faculty communication: We believe in
                        fostering a strong connection between students and their
                        instructors. Our user-friendly platform allows students
                        to effortlessly locate faculty members by name or ID,
                        facilitating seamless communication and fostering a
                        collaborative learning environment.
                    </div>
                </div>
                <img
                    src={img2}
                    alt="Mission Image"
                    style={{ ...imageStyle, borderRadius: "50%" }}
                />
            </div>
            <div className="values" style={valuesContainerStyle}>
                <img
                    src={img3}
                    alt=""
                    style={{
                        width: "280px",
                        height: "280px",
                        marginRight: "20px",
                        borderRadius: "50%",
                    }}
                />
                <div className="" style={{ font: "500 22px Roboto" }}>
                    Our Values:
                    <ul className="my-4" style={{ font: "400 16px Roboto" }}>
                        <li>
                            Efficiency: We strive to streamline processes and
                            save valuable time for both students and faculty.
                        </li>
                        <li>
                            Accessibility: We ensure our platform is accessible
                            and user-friendly for everyone, regardless of
                            technical expertise.
                        </li>
                        <li>
                            Transparency: We believe in clear and transparent
                            communication, providing students with all the
                            necessary information to connect with their faculty.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className=""
                style={{ textAlign: "center", font: "500 22px Roboto" }}
            >
                Why Choose Us?
                <ul
                    className="mx-auto my-4"
                    style={{
                        textAlign: "start",
                        width: "70%",
                        font: "400 16px Roboto",
                    }}
                >
                    <li>
                        Effortless faculty search: With our intuitive search
                        functions, finding the faculty member you need is a
                        breeze.
                    </li>
                    <li>
                        Improved communication: Enhance communication and
                        collaboration between students and instructors.
                    </li>
                    <li>
                        Streamlined processes: Save time and effort by utilizing
                        our efficient platform.
                    </li>
                    <li>
                        Focus on learning: We empower students to focus on their
                        studies by providing the tools they need to stay
                        connected.
                    </li>
                </ul>
            </div>
            <div className="text-center" style={{ font: "500 19px Roboto" }}>
                Join us on our journey to revolutionize education management!
            </div>
        </div>
    );
};

export default About;
