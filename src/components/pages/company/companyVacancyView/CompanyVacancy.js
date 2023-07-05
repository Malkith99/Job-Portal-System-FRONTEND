import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VacancyDetails = ({ match }) => {
    const [vacancy, setVacancy] = useState(null);

    useEffect(() => {
        const fetchVacancyDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4000/vacancies/${match.params._id}`
                );
                setVacancy(response.data);
            } catch (error) {
                console.error("Failed to fetch vacancy details:", error);
            }
        };

        fetchVacancyDetails().then(() => {});
    }, [match.params._id]);

    if (!vacancy) {
        return <div>Loading vacancy details...</div>;
    }

    return (
        <div>
            <h3 className="container2-flex-item1 job-pool-card-title" style={{ fontSize: "20px" }}>
                {vacancy.jobPosition}
            </h3>
            <p className="job-pool-card-para">{vacancy.description}</p>
            <p className="additional-details">Due Date: {vacancy.dueDate}</p>
            {/* Add the rest of the vacancy details here */}
            <p>Company: {vacancy.company}</p>
            <p>Location: {vacancy.location}</p>
            {/* Add more vacancy details as needed */}
            <Link to="/company-vacancy-view">Go to Company Vacancy View</Link>
        </div>
    );
};

export default VacancyDetails;
