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

      {/* <ul>
        {filteredFaculty.map((faculty, index) => (
          <li key={index}>{faculty.name}, {faculty.department}, {faculty.facultyType}</li>
        ))}
      </ul> */}
      </div>
     
      {/* <button
          type="button"
          className="btn btn-primary"
          style={{ height: "25px", marginBottom: "-10px", marginLeft: "10px", marginTop: "50px" }}
          onClick={handleSearch}
        >
          Search <SearchIcon />
        </button> */}
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
  const RefereeData = [
    { name: 'Dr. Prins', department: 'Electrical Department', facultyType: 'Faculty of Engineering' },
    { name: 'Dr. Kumudu', department: 'IS Department', facultyType: 'Faculty of Engineering' },
  ];

  const handleSave = (selectedFaculty) => {
    // Implement your save logic here
    console.log("Saved:", selectedFaculty);
  };

  return (
    <div>
      <RefereeSearch RefereeData={RefereeData} handleSave={handleSave} />
    </div>
  );
};

export default App;