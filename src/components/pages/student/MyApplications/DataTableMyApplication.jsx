import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { URL } from "../../../../env";
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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Swal from "sweetalert2";
function StudentApplication() {

  const user = JSON.parse(localStorage.getItem('user')); // Student

  const [recommendations, setRecommendations] = useState([]);
  const [students, setStudents] = useState([]);
  const [lecturerIdToMatch, setLecturerIdToMatch] = useState('');

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(storedUser);

    // Extract lecturerId from user data and set it
    const idToMatch = parsedUser?._id || '';
    setLecturerIdToMatch(idToMatch);


    // Fetch recommendations from the server
      axios.get(URL + '/api/responses')
          .then(responses => {
              // Filter recommendations based on lecturerIdToMatch
              const filteredResponses = responses.data.filter(response => {
                  return response.vacancy.some(vacancy => {
                      return vacancy.responses.some(response => response.studentId === idToMatch);
                  });
              });
              // Create an array to store the matched data
              const matchedData = [];

              // Loop through filtered data and store the IDs in an array
              filteredResponses.forEach(responses => {
                  responses.vacancy.forEach(vacancy => {
                      vacancy.responses.forEach(response => {
                          matchedData.push({
                              companyId: responses.companyId,
                              vacancyId: vacancy.vacancyId,
                              studentId: response.studentId,
                              responseId:response._id
                          });
                      });
                  });
              });

              // Store the matchedData array in local storage as a JSON string
              localStorage.setItem('matchedData', JSON.stringify(matchedData));

              // Log the filtered data
              filteredResponses.forEach(responses => {
                  responses.vacancy.forEach(vacancy => {
                      vacancy.responses.forEach(response => {
                          console.log("Company ID:", responses.companyId);
                          console.log("Vacancy ID:", vacancy.vacancyId);
                          console.log("Student ID:", response.studentId);
                          console.log("Response ID:", response._id);
                      });
                  });
              });

              // Further processing as needed.

              if (filteredResponses.length > 0) {
                  console.log("Recommendations filtered successfully.");
              } else {
                  console.log("No recommendations matching the criteria.");
              }

          // Fetch data for each recommendation
          const recommendationPromises = matchedData.map(recommendation => {
            const studentId = recommendation.studentId;
            const companyId = recommendation.companyId;
            const vacancyId = recommendation.vacancyId;
              const responseId = recommendation.responseId;


            const studentPromise = axios.get(`${URL}/api/users/${studentId}`);
            const companyPromise = axios.get(`${URL}/api/users/${companyId}`);
            const vacancyPromise = axios.get(`${URL}/api/vacancies/${companyId}/${vacancyId}`);

            return Promise.all([studentPromise, companyPromise, vacancyPromise])
                .then(responses => ({
                  recommendation,
                  studentData: responses[0].data.user,
                  companyData: responses[1].data.user,
                  vacancyData: responses[2].data,
                    responseId : recommendation.responseId,
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

    const deleteResponse= (responseId) => {
        console.log("Response ID:", responseId);
        const url = URL +`/api/responses/${responseId}`;
        axios.delete(url)
            .then(response => {
                console.log('Vacancy deleted successfully');
                Alert();
                // Update the jobpool state by filtering out the deleted vacancy
            })
            .catch(error => {
                console.log("Failed to delete vacancy");
                console.error('Failed to delete vacancy:', error);
            });
    };

    const Alert = () =>{
        Swal.fire('Deleted', 'Succesfully',
            'Delete')
    }

  return (
    <div className='container'>
      <Typography variant="h4">Applied Job Status</Typography>
      {/*<Typography>Student ID to match: {user._id}</Typography>*/}
      <TableContainer component={Paper} style={{ margin: "2%", colorScheme: "black" }}>
        <Table>
          <TableHead style={{ background: "#0073a5" }}>
            <TableRow>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Flyer</TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Company Name</TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Job Position </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Location</TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recommendations.map(recommendation => (
                <TableRow key={recommendation._id}>
                  <TableCell><img src={`data:image/jpeg;base64/${recommendation.vacancyData.flyer}`} alt="Vacancy Flyer" />

                  </TableCell>
                  <TableCell>{recommendation.companyData.firstName} {recommendation.companyData.lastName}</TableCell>
                  <TableCell>{recommendation.vacancyData.jobPosition}</TableCell>
                  <TableCell>{recommendation.vacancyData.companyLocation}</TableCell>
                    <TableCell>
                    <button
                        onClick={() => {
                            deleteResponse(recommendation.responseId);

                        }}

                        className="btn btn-primary reject butdet"
                        style={{
                            //color: "darkred",
                            //  marginRight: "5px",
                            marginRight: "5px",
                            //  background: "white",
                            // borderRadius: "0",
                            background: "#2B547E",
                            marginTop:"2px",
                            border: "none",
                            width: "180px "
                        }}
                    >
                        Delete
                        <DeleteOutlinedIcon style={{ marginLeft: "5px" }} />
                    </button>
                    </TableCell>

                  <TableCell>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudentApplication;
