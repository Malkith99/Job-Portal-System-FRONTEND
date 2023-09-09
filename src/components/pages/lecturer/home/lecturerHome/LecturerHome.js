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
    axios.get(URL+'/api/recommendations')
        .then(response => {
          // Filter recommendations based on lecturerIdToMatch
          const filteredRecommendations = response.data.filter(recommendation => recommendation.lecturerId === idToMatch);
          //setRecommendations(filteredRecommendations);

          // Extract student IDs from filtered recommendations
        const studentIds = filteredRecommendations.map(recommendation => recommendation.studentId);

        // Fetch student data for each student ID
        const studentPromises = studentIds.map(studentId =>
          axios.get(`${URL}/api/users/${studentId}`)
        );
       
        // Wait for all student data requests to complete
        Promise.all(studentPromises)
          .then(studentResponses => {
            // Extract student data from responses
            const studentsData = studentResponses.map(response => response.data.user);

            // Combine student data with filtered recommendations
            const updatedRecommendations = filteredRecommendations.map((recommendation, index) => ({
              ...recommendation,
              studentData: studentsData[index], // Attach student data to recommendations
            }));

            setRecommendations(updatedRecommendations);
          })
          .catch(error => {
            console.error('Error fetching student information:', error);
          });
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
    console.log(students);
  
    return (
        <div className='container'>
            <Typography variant="h4">Recommendations for Lecturer</Typography>
            <Typography>Lecturer ID to match: {lecturerIdToMatch}</Typography>
            <TableContainer component={Paper} style={{margin:"2%",colorScheme:"black"}}>
                <Table>
                    <TableHead style={{background:"#0073a5"}}>
                        <TableRow>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Student Name</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Company Id</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Vacancy Id</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>Comment</TableCell>
                            <TableCell style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",color:"white"}}>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recommendations.map(recommendation => (
                            <TableRow key={recommendation._id}>
                                <TableCell>{recommendation.studentData.firstName} {recommendation.studentData.lastName}</TableCell>
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
