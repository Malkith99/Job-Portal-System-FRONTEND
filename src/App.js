import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CompanyDetails from "./components/pages/company/companyDetails/CompanyDetails";
import CompanyregisterMain from "./components/pages/company/companyRegistration/CompanyRegisterMain";
import CompanyMainhome from "./components/pages/company/home/CompanyMainHome";
import { CompanyJobPool } from "./components/pages/company/home/companyHome/CompanyJobPool/CompanyJobPool";
import { UpdateJob } from "./components/pages/company/home/companyHome/CompanyJobPool/UpdateJob";
import Home from "./components/pages/home/home";
import LectureMainHome from "./components/pages/lecturer/home/LectureMainHome";
import LecturerDetails from "./components/pages/lecturer/lectureDetails/LecturerDetails";
import LecturerRegisterMain from "./components/pages/lecturer/lectureRegistration/LecturerRegisterMain";
import StudentLogin from "./components/pages/student/studentLogin/studentLogin";
import LoginPage from "./components/pages/loginPage/LoginPage";
import StudentMainhome from "./components/pages/student/home/StudentMainhome";
import { StudentApplicationCompany } from "./components/pages/student/studentApplication/StudentApplicationCompany";
import { StudentApplicationLecturer } from "./components/pages/student/studentApplication/StudentApplicationLecturer";
import StudentRegistrationBasicPage from "./components/pages/student/studentRegistration/step1/StudentRegistrationBasicPage";
import UserDetailsMain from "./components/pages/student/studentRegistration/step2/UserDetailsMain";
import CompanyLogin from "./components/pages/company/companyLogin/companyLogin";
import LecturerLogin from "./components/pages/lecturer/lecturerLogin/lecturerLogin";


function App() {
  const [isLogedIn, setIsLogedIn] = useState(true);

  const handlLogOut = () => {
    setIsLogedIn(false);
  };

  return (
    <Router>
      {/* <MainHeader isLogedIn={isLogedIn} onLogout={handlLogOut}/> */}
      <Routes>
        <Route
          path="/"
          exact
          element={<Home isLogedIn={isLogedIn} onLogout={handlLogOut} />}
        />
        <Route
          path="/student-login"
          exact
          element={<StudentLogin isLogedIn={isLogedIn} onLogout={handlLogOut} />}
        />
        <Route
          path="/company-login"
          exact
          element={<CompanyLogin isLogedIn={isLogedIn} onLogout={handlLogOut}/>}
        />

````````<Route
          path="/lecturer-login"
          exact
          element={<LecturerLogin isLogedIn={isLogedIn} onLogout={handlLogOut}/>}
        />
        
        <Route
          path="/"
          exact
          element={<LoginPage isLogedIn={isLogedIn} onLogout={handlLogOut} />}
        />
        <Route
          path="/student-register"
          element={
            <StudentRegistrationBasicPage
              isLogedIn={isLogedIn}
              onLogout={handlLogOut}
            />
          }
        />
        <Route
          path="/student-register-final"
          element={
            <UserDetailsMain isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/student/home"
          element={
            <StudentMainhome isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/lecturer"
          element={
            <LecturerRegisterMain
              isLogedIn={isLogedIn}
              onLogout={handlLogOut}
            />
          }
        />
        <Route
          path="/lecture/home"
          element={
            <LectureMainHome isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/company"
          element={
            <CompanyregisterMain isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/company/home"
          element={
            <CompanyMainhome isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/company-details"
          element={
            <CompanyDetails isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/lecturer-details"
          element={
            <LecturerDetails isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/student-application-for-company"
          element={
            <StudentApplicationCompany
              isLogedIn={isLogedIn}
              onLogout={handlLogOut}
            />
          }
        />
        <Route
          path="/student-application-for-lecturer"
          element={
            <StudentApplicationLecturer
              isLogedIn={isLogedIn}
              onLogout={handlLogOut}
            />
          }
        />
        <Route
          path="/company-job-pool"
          element={
            <CompanyJobPool isLogedIn={isLogedIn} onLogout={handlLogOut} />
          }
        />
        <Route
          path="/update-company-job"
          element={<UpdateJob isLogedIn={isLogedIn} onLogout={handlLogOut} />}
        />
        {/* <Route path="/registerStudent" element={<StudentRegistrationBasicPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
