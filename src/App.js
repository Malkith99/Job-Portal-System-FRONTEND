import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home"
import StudentregisterMain from "./studentregister/StudentregisterMain";
import LecturerregisterMain from "./lecturerregister/LecturerregisterMain";
import CompanyregisterMain from "./companyregistration/CompanyregisterMain";
import UserDetailsMain from "./userDetails/userDetailsMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* http://localhost:3000/user-details link is redirecting to the user details page. */}
        <Route path="/user-details" exact element={<UserDetailsMain />} />
        <Route path="/student" element={<StudentregisterMain />} />
        <Route path="/lecturer" element={<LecturerregisterMain />} />
        <Route path="/company" element={<CompanyregisterMain />} />
      </Routes>
    </Router>

  );
}

export default App;
