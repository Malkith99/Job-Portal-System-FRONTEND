import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";

export default function LecturerMainHome({ isLogedIn, onLogout }) { // make a change
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
