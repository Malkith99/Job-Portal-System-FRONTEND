import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import StudentregisterMain from "./studentregister/StudentregisterMain";
import LecturerregisterMain from "./lecturerregister/LecturerregisterMain";
import CompanyregisterMain from "./companyregistration/CompanyregisterMain";
import UserDetailsMain from "./userDetails/userDetailsMain";
import StudentMainhome from "./Homepage/components/StudentMainhome";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import StudentRegistrationBasicPage from './components/Pages/StudentRegistrationBasicPage';
import StudentRegistrationUserDetailsPage from './components/Pages/StudentRegistrationUserDetailsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user-details" exact element={<UserDetailsMain />} />
        <Route path="/student" element={<StudentregisterMain />} />
        <Route path="/lecturer" element={<LecturerregisterMain />} />
        <Route path="/company" element={<CompanyregisterMain />}/>
        <Route path="/user" element={<UserDetailsMain/>}/>
        <Route path="/student/home" element={<StudentMainhome/>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerStudent" element={<StudentRegistrationBasicPage />} />
        <Route path="/registerStudentUser" element={<StudentRegistrationUserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
