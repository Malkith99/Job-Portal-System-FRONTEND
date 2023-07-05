import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";

function LectureMainHome({ isLogedIn, onLogout }) {
    const content = (
        <>
            <Link to="/lecturer-home">Lecturer Home</Link>
            <Link to="/lecturer-profile">Profile</Link>
        </>
    );

    return (
        <div className="page-container">
            <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
            <div className="feed-container">
                {/* Render your feed or posts here */}
            </div>
            <Footer />
        </div>
    );
}

export default LectureMainHome;
