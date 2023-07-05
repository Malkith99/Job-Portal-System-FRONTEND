import React from "react";
import MainHeader from "../../../mainHeader/mainHeader";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import CompanyVacancy from "./CompanyVacancy"; // Update the import statement

function CompanyVacancyView({ isLogedIn, onLogout }) {
    const content = (
        <>
            <Link to="/company-details">Profile Details</Link>
        </>
    );
    return (
        <div>
            <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />

            <CompanyVacancy />

            <Footer />
        </div>
    );
}

export default CompanyVacancyView;
