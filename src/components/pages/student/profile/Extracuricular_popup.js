import React, { useState } from 'react';
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import {toast} from "react-toastify";

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

const App = (props) => {
    const storedData = JSON.parse(localStorage.getItem("jbusers"));
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
    const [refree, setRefree] = useState("" || user.refree);

    // Filter referees with role "lecturer"
    const lecturerReferees = storedData.filter(user => user.role === "lecturer");

    const [selectedLecturer, setSelectedLecturer] = React.useState(null);

    const handleSelectChange = (event) => {
        const selectedLecturerId = event.target.value;
        setSelectedLecturer(selectedLecturerId);
    };

    const handleSave = () => {
        if (selectedLecturer) {
            // Get selected lecturer user based on selectedLecturer

            const data3 = {
                refree: selectedLecturer
            };
            // Implement your save logic here using selectedLecturerUser
            console.log("Saved:", user._id);
            console.log(data3);
            props.sendData(JSON.stringify(data3));
            alert("Save successful. Please close the window manually.");
            toast.success("selected");
        }
    };

    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <select className='form-select' style={{marginRight:"1%"}} value={selectedLecturer || refree} onChange={handleSelectChange}>
                <option value={refree}>Select a lecturer</option>
                {lecturerReferees.map(user => (
                    <option key={user._id} value={user._id}>
                        {user.firstName + " " + user.lastName}
                    </option>
                ))}
            </select>
            <button className='btn btn-primary' onClick={handleSave}>Save</button>
        </div>
    );
};






export default App;