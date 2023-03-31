import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LecturerRegisterMain from "./components/pages/lecturer/lectureRegistration/LecturerRegisterMain";
import CompanyregisterMain from "./components/pages/company/companyRegistration/CompanyRegisterMain";
import UserDetailsMain from "./components/pages/student/studentRegistration/step2/UserDetailsMain";
import CompanyMainhome from "./components/pages/company/home/CompanyMainHome";
import LoginPage from './components/pages/loginPage/LoginPage';
import StudentRegistrationBasicPage from './components/pages/student/studentRegistration/step1/StudentRegistrationBasicPage';
import StudentMainhome from "./components/pages/student/home/StudentMainhome";
import CompanyDetails from "./components/pages/company/companyDetails/CompanyDetails";
import LectureMainHome from "./components/pages/lecturer/home/LectureMainHome";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(true);

  const handlLogOut = () => {
    setIsLogedIn(false);
  }

  return (
    <Router>
      {/* <MainHeader isLogedIn={isLogedIn} onLogout={handlLogOut}/> */}
      <Routes>
        <Route path="/" exact element={<LoginPage isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
        <Route path="/student-register" element={<StudentRegistrationBasicPage isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
        <Route path="/student-register-final" element={<UserDetailsMain isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/student/home" element={<StudentMainhome isLogedIn={isLogedIn} onLogout={handlLogOut} />} />
        <Route path="/lecturer" element={<LecturerRegisterMain isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
        <Route path="/lecture/home" element={<LectureMainHome isLogedIn={isLogedIn} onLogout={handlLogOut} />} />
        <Route path="/company" element={<CompanyregisterMain isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/company/home" element={<CompanyMainhome isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/company-details" element={<CompanyDetails isLogedIn={isLogedIn} onLogout={handlLogOut}/>}/>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/registerStudent" element={<StudentRegistrationBasicPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
