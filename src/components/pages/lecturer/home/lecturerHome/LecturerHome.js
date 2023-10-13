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
  const [students, setStudents] = useState([]);
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
axios.get(URL + '/api/recommendations')
  .then(response => {
    // Filter recommendations based on lecturerIdToMatch
    const filteredRecommendations = response.data.filter(recommendation => recommendation.lecturerId === idToMatch);

    // Fetch data for each recommendation
    const recommendationPromises = filteredRecommendations.map(recommendation => {
      const studentId = recommendation.studentId;
      const companyId = recommendation.companyId;
      const vacancyId = recommendation.vacancyId;


      const studentPromise = axios.get(`${URL}/api/users/${studentId}`);
      const companyPromise = axios.get(`${URL}/api/users/${companyId}`);
      const vacancyPromise = axios.get(`${URL}/api/vacancies/${companyId}/${vacancyId}`);

      return Promise.all([studentPromise, companyPromise, vacancyPromise])
        .then(responses => ({
          recommendation,
          studentData: responses[0].data.user,
          companyData: responses[1].data.user,
          vacancyData: responses[2].data,
            comment:recommendation.comment,
          recommend:recommendation.recommended,
          vacancyId:recommendation.vacancyId,
          companyId:recommendation.companyId,
          studentId:recommendation.studentId,
        }));
    });

    // Wait for all promises to complete
    Promise.all(recommendationPromises)
      .then(updatedRecommendations => {
        setRecommendations(updatedRecommendations);
      })
      .catch(error => {
        console.error('Error fetching information:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching recommendations:', error);
  });

  }, []);

  const handleViewButtonClick = (vacancyId, studentId, companyId) => {
    window.location.href = `student-application-for-lecturer/${vacancyId}&${studentId}&${companyId}`;
};
  
  
  
    return (
        <div className='container'>
            <Typography variant="h4">Recommendations for Lecturer</Typography>
            <Typography>Lecturer ID to match: {lecturerIdToMatch}</Typography>
            <TableContainer component={Paper} style={{margin:"2%",colorScheme:"black"}}>
                <Table>
                    <TableHead style={{background:"#0073a5"}}>
                        <TableRow>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Student Name</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Company Name</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Vacancy Type </TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Comment</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recommendations.map(recommendation => (
                            <TableRow key={recommendation._id}
                            style={{
                              backgroundColor: recommendation.comment === null ? '#ffdddd': 'transparent',
                          }}
                            >
                                <TableCell>{recommendation.studentData.firstName} {recommendation.studentData.lastName}</TableCell>
                                <TableCell>{recommendation.companyData.firstName} {recommendation.companyData.lastName}</TableCell>
                                <TableCell>{recommendation.vacancyData.jobPosition}</TableCell>
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
