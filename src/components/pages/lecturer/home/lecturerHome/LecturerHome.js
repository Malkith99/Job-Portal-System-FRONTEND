import React, {useEffect, useState} from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import {URL} from "../../../../../env";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
} from '@mui/material';
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
        const data = {
            vacancyId: vacancyId,
            studentId: studentId,
            companyId: companyId
        };

        const token = JSON.stringify(data);
        localStorage.setItem("ID", token);

        window.location.href = `student-application-for-lecturer/${vacancyId}&${studentId}&${companyId}`;
    };


    return (
        <div>
            <Typography variant="h4">Recommendations for Lecturer</Typography>
            <Typography>Lecturer ID to match: {lecturerIdToMatch}</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Student ID</TableCell>
                            <TableCell>Company Id</TableCell>
                            <TableCell>Vacancy Id</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recommendations.map(recommendation => (
                            <TableRow key={recommendation._id}>
                                <TableCell>{recommendation.studentId}</TableCell>
                                <TableCell>{recommendation.companyId}</TableCell>
                                <TableCell>{recommendation.vacancyId}</TableCell>
                                <TableCell>{recommendation.comment}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            handleViewButtonClick(
                                                recommendation.vacancyId,
                                                recommendation.studentId,
                                                recommendation.companyId
                                            )
                                        }
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default RecommendationComponent;
