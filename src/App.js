import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/home"
import LecturerregisterMain from "./lecturerregister/LecturerregisterMain";
import CompanyregisterMain from "./companyregistration/CompanyregisterMain";
import UserDetailsMain from "./userDetails/userDetailsMain";
import CompanyMainhome from "./Homepage/components/Companyhome/CompanyMainhome";
import LoginPage from './LoginPage';
import StudentRegistrationBasicPage from './components/Pages/StudentRegistrationBasicPage';
import StudentMainhome from "./Homepage/components/StudentMainhome";
import CompanyDetails from "./Homepage/components/Companyhome/CompanyDetails/CompanyDetails";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(true);

  const handlLogOut = () => {
    setIsLogedIn(false);
  }

  return (
    <Router>
      {/* <MainHeader isLogedIn={isLogedIn} onLogout={handlLogOut}/> */}
      <Routes>
        <Route path="/" exact element={<Home isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
        <Route path="/student-register" element={<StudentRegistrationBasicPage isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
        <Route path="/lecturer" element={<LecturerregisterMain isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
        <Route path="/company" element={<CompanyregisterMain isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/student-register-final" element={<UserDetailsMain isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/company/home" element={<CompanyMainhome isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/student/home" element={<StudentMainhome isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/company-details" element={<CompanyDetails isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/registerStudent" element={<StudentRegistrationBasicPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
