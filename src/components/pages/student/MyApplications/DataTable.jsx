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
function StudentApplication() {

  const user = JSON.parse(localStorage.getItem('user')); //Student
  const response = JSON.parse(localStorage.getItem('jbresponses')); //Student
  console.log(user);
  console.log(response);

  useEffect(() => {


  }, []);





  return (
    <div className='container'>
      <Typography variant="h4">Applied Vacancies</Typography>
      <Typography>Student ID to match: {user._id}</Typography>
      <TableContainer component={Paper} style={{ margin: "2%", colorScheme: "black" }}>
        <Table>
          <TableHead style={{ background: "#0073a5" }}>
            <TableRow>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Company Name</TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Position</TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>Date </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white" }}>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {user.map(recommendation => (
              <TableRow key={recommendation._id}>
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
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudentApplication;
