import * as React from "react";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "lightBlue",
    color: theme.palette.common.black,
    fontSize: 16,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const findUserById = (companyId) => {
  try {
    const jbusers = JSON.parse(localStorage.getItem("jbusers"));
    console.log(companyId);
    // Display company name
    const company = jbusers.find((company) => company._id === companyId);

    if (company) {
      // If a company is found with the given companyId, you can access its data
      console.log("Company Name:", company.firstName, company.lastName);
      return company; // Return the company data
    } else {
      console.log("Company not found");
      return null; // Return null if the company is not found
    }
  } catch (error) {
    console.error("Error retrieving jbusers from local storage:", error.message);
    return null; // Return null in case of an error
  }
};







function ResponcesData() {

  const { vacancyId } = useParams();
  const jbResponses = JSON.parse(localStorage.getItem("jbresponses") || "{}");

  // Filter responses based on the given vacancyId
  const filteredResponses = jbResponses.filter((response) =>
      response.vacancy.some((vacancy) => vacancy.vacancyId === vacancyId)
  );

console.log(filteredResponses);
  function handleViewButtonClick(id, studentid, companyId) {
    // Navigate to the specified URL with query parameters
    console.log(id);
    window.location.href = `/grp13/student-application-for-company/${id}&${studentid}&${companyId}`;
  }



  return (
    <>

      <TableContainer component={Paper}>
        <div style={{ margin: 20 }} />
        <div style={{ marginLeft: 100, marginRight: 100 }}>

          <div style={{ margin: 20 }} />
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" width={250}>
                  Student Name
                </StyledTableCell>
                <StyledTableCell align="center"> Profile</StyledTableCell>
                <StyledTableCell align="center"> responseDate</StyledTableCell>
                <StyledTableCell align="center">comment</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredResponses.map((response) => (
                response.vacancy.map((vacancy) => {
                  if (vacancy.vacancyId === vacancyId) { // Check if the vacancyId matches
                    return vacancy.responses.map((responseItem) => {
                      const student = findUserById(responseItem.studentId); // Make sure findCompanyById is properly defined
                      return (
                          <StyledTableRow key={responseItem._id}>
                            <StyledTableCell align="center">{student.firstName}</StyledTableCell>
                            <StyledTableCell align="center">
                              <img
                                  src={`data:image/jpeg;base64/${student.profilePhoto}`} // Interpolate profilePhoto correctly
                                  alt={`${student.firstName}'s Profile`}
                                  width="50" // Adjust the width as needed
                                  height="50" // Adjust the height as needed
                              />
                            </StyledTableCell>
                            <StyledTableCell align="center">{responseItem.responseDate}</StyledTableCell>
                            <StyledTableCell align="center">{responseItem.comment}</StyledTableCell>

                            <StyledTableCell align="center">
                              <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleViewButtonClick(vacancyId,student._id,response.companyId)} // Make sure handleViewButtonClick is properly defined
                              >
                                View
                              </Button>
                            </StyledTableCell>
                          </StyledTableRow>
                      );
                    });
                  }
                  return null; // Return null for non-matching vacancyIds
                })
              ))}
            </TableBody>





          </Table>
        </div>
      </TableContainer>

      {/*

      <Element name="responsesSection">
        <h1
            className="cmp-headings loginN"
            style={{ marginBottom: "2rem" }}
        >
          Responses Section:
        </h1>
        <div className="responses">
          {responses.map((response, i) => (
              <div key={i} className="response responses-sec-response">
                <h3 className="container2-flex-item1" style={{ fontSize: "20px" }}>
                  {response._id}
                </h3>
                {response.vacancy.map((vacancy) => (
                    <div key={vacancy._id}>
                      <p>Vacancy ID: {vacancy.vacancyId}</p>
                      {vacancy.jbResponses.map((responseItem) => (
                          <div key={responseItem._id}>
                            <p>Student ID: {responseItem.studentId}</p>
                            <p>Response Date: {new Date(responseItem.responseDate).toLocaleString()}</p>
                            <p>Comment: {responseItem.comment}</p>
                            <div className="container" style={{ alignItems: "center" }}>
                              <button
                                  className="btn btn-primary butdet"

                                  style={{ background: "#2B547E", marginLeft: "-12px" }}
                              >
                                See the Details
                              </button>
                            </div>
                          </div>
                      ))}
                    </div>
                ))}
              </div>
          ))}

        </div>

      </Element>


*/}


    </>
  );
}

export default ResponcesData;
