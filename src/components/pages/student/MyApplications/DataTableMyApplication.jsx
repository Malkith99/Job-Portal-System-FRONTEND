import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
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
  const [application, setApplication] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')); //Student
  const appUrl = URL + `/api/applications/${user._id}`; //Student ID



  useEffect(() => {
    //Fetch Applications
    axios.get(appUrl)
      .then(response => {
        setApplication(response.data);
        console.log(application);

      })
      .catch(error => {
        console.log("Failed to fetch Applications");
        console.error('Failed to fetch Applications:', error);
      });
  }, [appUrl]);

  const handleViewButtonClick = (vacancyId) => {
    //window.location.href = `student-application-for-lecturer/${vacancyId}`;
    window.location.href = `company-vacancy-view-student/${vacancyId}`;
  };



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
            {application.map((application) => (
              <TableRow key={application._id}>
                <TableCell>{application.companyName || "company Name"} </TableCell>
                <TableCell>{application.jobPosition || "job Postion"} </TableCell>
                <TableCell>
                  {application.responseDate
                    ? format(new Date(application.responseDate), 'yyyy-MM-dd')
                    : "No Date"} {/* Fixed "as no Date" to "No Date" */}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      handleViewButtonClick(
                        application.vacancyId,
                        // appplication.companyId
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
export default StudentApplication;