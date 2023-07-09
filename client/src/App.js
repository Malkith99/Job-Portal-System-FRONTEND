import './App.css';
import {BrowserRouter , Route, Routes } from "react-router-dom"


import AllStudents from './components/AllStudent';
import Home from './components/Home/Home';

import Profile from './components/pages/student/profile/studentProfileMain';
import StudentSignIn from './components/pages/student/StudentSignIn/StudentSignIn';
import StudentHome from './components/pages/student/home/StudentHome';
import StudentSignUpPage from './components/pages/student/StudentSignUp/StudentSignUpPage';
import StudentAppliation from './components/pages/student/MyApplications/MyApplications';

import CompanySignUp from './components/pages/company/companySignup/companySignup';
import CompanySignIn from './components/pages/company/companyLogin/companyLogin';
import CompanyProfile from './components/pages/company/companyProfile/companyProfile/CompanyProfile';
import CompanyJobPool from './components/pages/company/home/companyHome/CompanyJobPool/CompanyJobPool';
import CompanyLogin from './components/pages/company/companyLogin/companyLogin';
import CompanyHomePage from './components/pages/company/home/companyHome/CompanyHomePage';
import VacancyPage from './components/pages/company/home/companyHome/VacancySectionPage';
import ResponseVac from './components/pages/company/home/companyHome/ResponsesVac';

import AllResponses from './components/pages/company/studentResponces/allResponces'; 
import ProfileImage from './components/pages/student/profileImage/profileImageMain';


import LecturerSignUp from './components/pages/lecturer/lecturerSignup/lecturerSignup';
import LecturerLogin from './components/pages/lecturer/lecturerLogin/lecturerLogin';
import LecturerDetails from './components/pages/lecturer/lectureDetails/LecturerDetails';
import LectureMainHome from './components/pages/lecturer/home/LectureMainHome';

import StudentApplicationCompany from "../src/components/pages/studentApplication/StudentApplicationCompany";
import StudentApplicationLecturer from "../src/components/pages/studentApplication/StudentApplicationLecturer";



import AdminHome from './components/pages/Admin/AdminHome/adminHome';

function App() {

 
  return (

    <BrowserRouter>
        <div>
          {/* <Header/> */}
          <Routes>
          <Route path="/" element ={<Home/>} ></Route>

          <Route path="/student-signUp" element={<StudentSignUpPage/> }> </Route>
          <Route path="/student-signIn" element={<StudentSignIn/> }> </Route>
          <Route path="/student-profile" element={<Profile/> }> </Route>
          <Route path="/student-home" element={<StudentHome/> }> </Route>
          <Route path="/student-applications" element={<StudentAppliation/> }> </Route>


          <Route path="/company-signup" element={<CompanySignUp/> }> </Route>
          <Route path="/company-signin" element={<CompanySignIn/> }> </Route>
          {/* <Route path="/company-HomePage" element={<CompanyHome/> }> </Route> */}
          <Route path="/company-profile" element={<CompanyProfile/> }> </Route>
          <Route path="/company-job-pool" element={<CompanyJobPool/> }> </Route>
            <Route path="/company-login" element={<CompanyLogin/>}></Route>

          <Route path="/all-student-responces" element={<AllResponses/> }> </Route>
          <Route path="/profileImage" element={<ProfileImage/> }> </Route>
          <Route path="/company-login" element={<CompanyLogin/>}></Route>
          <Route path="/adminHome" element={<AdminHome/>}></Route>

          <Route path="/lecturer-login" element={<LecturerLogin/>}></Route>
          <Route path='/lecturer-home' element={<LectureMainHome/>}></Route>
          <Route path="lecturer-signUp" element={<LecturerSignUp/>}></Route>
          <Route path="lecturer-signIn" element={<LecturerLogin/>}></Route>
          <Route path="lecturer-home" element={<LectureMainHome/>}></Route>

          {/* <Route path="/student-application-for-company/:id" element={<StudentApplicatinCompany/> }> </Route> */}

          <Route path='/lecture-profile' element={<LecturerDetails/>}></Route>
          <Route path="/student-application-for-company/:id" element={<StudentApplicationCompany/>}></Route>
          <Route path="/student-application-for-lecturer" element={<StudentApplicationLecturer/>}></Route>


          <Route path='/company-HomePage' element={<CompanyHomePage/>}></Route>
          <Route path='/vacancy-page' element={<VacancyPage/>}></Route>
            <Route path='/Response-vac' element={<ResponseVac/>}></Route>






            <Route path ="/" element={<AllStudents/>}></Route>      {/*normally the home page featers at the end*/}
          </Routes>
        </div>
    </BrowserRouter>

  
  );
}

export default App;
