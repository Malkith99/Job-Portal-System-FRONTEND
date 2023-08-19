import React, { useState } from 'react';
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';

const RefereeSearch = ({ RefereeData, handleSave }) => {
  const [department, setDepartment] = useState('');
  const [facultyType, setFacultyType] = useState('');
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleSearch = () => {
    const filtered = RefereeData.filter(faculty =>
      faculty.department.toLowerCase().includes(department.toLowerCase()) &&
      faculty.facultyType.toLowerCase().includes(facultyType.toLowerCase())
    );
    setFilteredFaculty(filtered);
    setSelectedFaculty(null); // Clear selected faculty when search changes
  };

  return (
    <div>
      <div>
      <div>
      <div className="flex-container2">
      <div className="sub-flex-item2">
        <div className="input-filed">

       
        <input
          type="text"
          placeholder="Enter Department"
          className="form-control"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        /></div>
         <div className="text-center" style={{ marginTop: "-20px" }}>
        <label className="hint-title">
          Department
        </label>
      </div>
      </div>
      <div className="sub-flex-item2">
        <div className="input-filed">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Faculty Type"
          value={facultyType}
          onChange={e => setFacultyType(e.target.value)}
        /></div>
        <div className="text-center" style={{ marginTop: "-20px" }}>
                  <label className="hint-title">
                    Faculty
                  </label>
                </div>
                </div>
                <button
            type="button"
            className="btn btn-primary"
            style={{hieght:"25px", marginBottom: "-10px", marginLeft: "auto" ,marginTop:"50px"}}
             onClick={handleSearch}>Search <SearchIcon/></button>
 </div>
              
     
      </div>
      <div style={{marginTop:"25px"}}> 


      </div>
     

      </div>

      <div style={{ marginTop: "25px" }}>
        <form>
          {filteredFaculty.map((faculty, index) => (
            <div key={index}>
              <input
                type="radio"
                name="selectedFaculty"
                id={`faculty-${index}`}
                checked={selectedFaculty === index}
                onChange={() => setSelectedFaculty(index)}
              />
              <label htmlFor={`faculty-${index}`}>
                {faculty.name}, {faculty.department}, {faculty.facultyType}
              </label>
            </div>
          ))}
        </form>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        style={{ marginBottom: "10px", marginLeft: "10px", marginTop: "10px" }}
        onClick={() => handleSave(filteredFaculty[selectedFaculty])}
        disabled={selectedFaculty === null}
      >
        Save
      </button>
    </div>
  );
};

const App = () => {
    const storedData = JSON.parse(localStorage.getItem("jbusers"));

    // Filter referees with role "lecturer"
    const lecturerReferees = storedData.filter(user => user.role === "lecturer");

    const [selectedLecturers, setSelectedLecturers] = React.useState([]);

    const toggleLecturerSelection = (lecturerId) => {
        if (selectedLecturers.includes(lecturerId)) {
            setSelectedLecturers(selectedLecturers.filter(id => id !== lecturerId));
        } else {
            setSelectedLecturers([...selectedLecturers, lecturerId]);
        }
    };

    const handleSave = () => {
        // Implement your save logic here using selectedLecturers
        console.log("Saved:", selectedLecturers);
    };

    return (
        <div>
            <table>
                <tbody>
                {lecturerReferees.map((user) => (
                    <tr key={user._id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedLecturers.includes(user._id)}
                                onChange={() => toggleLecturerSelection(user._id)}
                            />
                        </td>
                        <td>{user.firstName + " " + user.lastName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={handleSave}>Save Selected Lecturers</button>
        </div>
    );
};




export default App;