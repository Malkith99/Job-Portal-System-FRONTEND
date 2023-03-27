import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import LecturerregisterMain from "./lecturerregister/LecturerregisterMain";
import CompanyregisterMain from "./companyregistration/CompanyregisterMain";
import UserDetailsMain from "./userDetails/userDetailsMain";

import CompanyMainhome from "./Homepage/components/Companyhome/CompanyMainhome";
import LoginPage from './LoginPage';
import StudentRegistrationBasicPage from './components/Pages/StudentRegistrationBasicPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/student-register" element={<StudentRegistrationBasicPage />} />
        <Route path="/lecturer" element={<LecturerregisterMain />} />
        <Route path="/company" element={<CompanyregisterMain />}/>
        <Route path="/student-register-final" element={<UserDetailsMain/>}/>
        <Route path="/company/home" element={<CompanyMainhome/>}/>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/registerStudent" element={<StudentRegistrationBasicPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
