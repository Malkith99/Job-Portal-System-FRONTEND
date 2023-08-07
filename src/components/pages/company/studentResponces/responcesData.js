import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const basename='grp13';
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

function createData(id, name, position, date) {
  return { id, name, position, date };
}

const rows = [
  createData(1, "Madushan N.N.A.", "Developer", "2022-01-01"),
  createData(2, "Malkith A.V.A.", "Designer", "2022-01-02"),
  createData(3,"Manimendra M.A.N.S.N.","Manager","2022-01-03"),
  createData(4, "Tiranga Rukshan", "Developer", "2022-01-04"),
  createData(5, "Sajini Bagya", "Manager", "2022-01-05"),
  createData(6, "Adeepa Tharuka", "Developer", "2022-01-01"),
  createData(7, "Diki Chamika", "Designer", "2022-01-02"),
  createData(8,"Suranga Lakmal","Manager","2022-01-03"),
  createData(9, "Dinesh Chandimal", "Developer", "2022-01-04"),
  createData(10, "Mahinda Rajapaksha", "Manager", "2022-01-05"),
];

function ResponcesData() {
  const [selectedId, setSelectedId] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  function handleViewButtonClick(id) {
    setSelectedId(id);
  }
  const filteredRows =
    searchQuery === ""
      ? rows
      : rows.filter((row) =>
          row.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  function handleViewButtonClick(id) {
    window.location.href = `grp13/student-application-for-company/${id}`;
  }

  return (
    <>
      {/* {selectedId !== null && (
        <div>
          <h2>Profile of {rows[selectedId - 1].name}</h2>
          <p>Position: {rows[selectedId - 1].position}</p>
          <p>Date: {rows[selectedId - 1].date}</p>
          <Button variant="contained" onClick={() => setSelectedId(null)}>
            Close
          </Button>
        </div>
      )} */}
      <TableContainer component={Paper}>
        <div style={{ margin: 20 }} />
        <div style={{ marginLeft: 100, marginRight: 100 }}>
          {/* <TextField
            id="search"
            label="Search Company Name"
            variant="outlined"
            margin="normal"
            size="small"
            style={{ width: 400 }}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          /> */}
          <div style={{ margin: 20 }} />
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" width={250}>
                  Employee Name
                </StyledTableCell>
                <StyledTableCell align="center">Position</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <StyledTableRow
                  
                >
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.position}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewButtonClick(row.id)}
                    >
                      View
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}

export default ResponcesData;
