import React, {useEffect, useState} from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import {URL} from "../../../../../env";

function RecommendationComponent() {
    const [user, setUser] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const [lecturerIdToMatch, setLecturerIdToMatch] = useState('');

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUser = localStorage.getItem("user");
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // Extract lecturerId from user data and set it
        const idToMatch = parsedUser?._id || '';
        setLecturerIdToMatch(idToMatch);

        // Fetch recommendations from the server
        axios.get(URL+'/api/recommendations')
            .then(response => {
                // Filter recommendations based on lecturerIdToMatch
                const filteredRecommendations = response.data.filter(recommendation => recommendation.lecturerId === idToMatch);
                setRecommendations(filteredRecommendations);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, []);

    const handleViewButtonClick = (vacancyId, studentId, companyId) => {
        window.location.href = `student-application-for-lecturer/${vacancyId}&${studentId}&${companyId}`;
    };

    return (
        <div>
            <h1>Recommendations for Lecturer</h1>
            <p>Lecturer ID to match: {lecturerIdToMatch}</p>
            <table>
                <thead>
                <tr>
                    <th>Recommendation ID</th>
                    <th>Recommendation student</th>
                    <th>company Id</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {recommendations.map(recommendation => (
                    <tr key={recommendation._id}>
                        <td>{recommendation.studentId}</td>
                        <td>{recommendation.companyId}</td>
                        <td>{recommendation.vacancyId}</td>
                        <td>{recommendation.comment}</td>
                        <td>
                            <button
                                onClick={() =>
                                    handleViewButtonClick(recommendation.vacancyId, recommendation.studentId, recommendation.companyId)
                                }
                            >
                                View
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecommendationComponent;