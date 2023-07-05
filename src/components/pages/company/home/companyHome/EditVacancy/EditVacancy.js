import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainHeader from "../../../../../mainHeader/mainHeader";
import "./EditVacancy.css";

function EditVacancy() {
    const { vacancyId } = useParams();
    const [vacancy, setVacancy] = useState(null);
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'));

    useEffect(() => {
        // Fetch vacancy details
        axios
            .get(`http://localhost:4000/vacancies/${user._id}/${vacancyId}`)
            .then((response) => {
                setVacancy(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch vacancy details:", error);
            });
    }, [user._id, vacancyId]);

    return (
        <div>
            <MainHeader />
            {/* Add your edit vacancy page content here */}
            {vacancy ? (
                <>
                    <h1>Edit Vacancy Page</h1>
                    <p>Vacancy ID: {vacancyId}</p>
                    <img src={`data:image/jpeg;base64/${vacancy.flyer}`} alt="Vacancy Flyer" />
                    {/* Display other vacancy details as needed */}
                </>
            ) : (
                <p>Loading vacancy details...</p>
            )}
        </div>
    );
}

export default EditVacancy;
