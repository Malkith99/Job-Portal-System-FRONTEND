import './App.css';

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import AllStudents from './components/AllStudent';
import Home from './components/Home/Home';

import Profile from './components/pages/student/profile/studentProfileMain';
import StudentSignIn from './components/pages/student/StudentSignIn/StudentSignIn';
import StudentHome from './components/pages/student/home/StudentHome';
import StudentSignUpPage from './components/pages/student/StudentSignUp/StudentSignUpPage';
import StudentAppliation from './components/pages/student/MyApplications/MyApplications';
import CompanyVacancyViewStudent from './components/pages/student/home/studentHome/CompanyJobView/CompanyJobView';



import CompanySignUp from './components/pages/company/companySignup/companySignup';
import CompanySignIn from './components/pages/company/companyLogin/companyLogin';
import CompanyHome from './components/pages/company/home/CompanyMainHome';
import CompanyProfile from './components/pages/company/companyProfile/CompanyProfileMain';
import CompanyJobPool from './components/pages/company/home/companyHome/CompanyJobPool/CompanyJobPool';

import CompanyLogin from './components/pages/company/companyLogin/companyLogin';


import AllResponses from './components/pages/company/studentResponces/allResponces'; 



import LecturerSignUp from './components/pages/lecturer/lecturerSignup/lecturerSignup';
import LecturerLogin from './components/pages/lecturer/lecturerLogin/lecturerLogin';
import LecturerDetails from './components/pages/lecturer/lectureDetails/LecturerDetails';
import LectureMainHome from './components/pages/lecturer/home/LectureMainHome';
import StudentApplicationCompany from "../src/components/pages/studentApplication/StudentApplicationCompany";
import StudentApplicationLecturer from "../src/components/pages/studentApplication/StudentApplicationLecturer";
import EmailVerify from './components/EmailVerify/emailVerify';

import CompanyHomePage from './components/pages/company/home/companyHome/CompanyHomePage';
import VacancyPage from './components/pages/company/home/companyHome/VacancySectionPage';
import ResponseVac from './components/pages/company/home/companyHome/ResponsesVac';
import AdminHome from './components/pages/Admin/AdminHome/adminHome';
import CompanyApplication from './components/pages/student/CompanyApplication';
import StudentApplicationForStudent from './components/pages/studentApplication/StudentApplicationForStudent';
import StudentJobApplication from './components/pages/studentApplication/StudentJobApplication';
import AllSignIn from './components/SignUpSignIn/AllSignIn';
import SignInSignUp from './components/SignUpSignIn/SignInSignUp';
import StudentDetails from './components/pages/Admin/StudentData/StudentData';
export default function App() {
const basename='grp13';
 
  return (
//basename={basename} when deploy put this in to the browserRouter instead
     <BrowserRouter basename={basename} >
    {/* <BrowserRouter > */}
        <div>
          {/* <Header/> */}
          
          <Routes>
            <Route path ="*" element={<Navigate to="/"/>}></Route>   {/*this route will be used as a catch-all route for any undefined or unmatched URLs. */}
          <Route path="/" element ={<Home/>} ></Route>

          <Route path="/student-signUp" element={<StudentSignUpPage/> }> </Route>
          <Route path="/student-signIn" element={<StudentSignIn/> }> </Route>
          <Route path="/student-profile" element={<Profile/> }> </Route>
          <Route path="/student-home" element={<StudentHome/> }> </Route>
          <Route path="/student-applications" element={<StudentAppliation/> }> </Route>
            <Route path="/company-vacancy-view-student/:vacancyId" element={<CompanyVacancyViewStudent/>}></Route>


          <Route path="/company-signup" element={<CompanySignUp/> }> </Route>
          <Route path="/company-signin" element={<CompanySignIn/> }> </Route>
          {/* { <Route path="/company-home" element={<CompanyHome/> }> </Route> } */}
          <Route path="/company-profile" element={<CompanyProfile/> }> </Route>
          <Route path="/company-job-pool" element={<CompanyJobPool/> }> </Route>
            <Route path="/company-login" element={<CompanyLogin/>}></Route>
          <Route path="/all-student-responses/:vacancyId" element={<AllResponses/> }> </Route>

          <Route path="/company-login" element={<CompanyLogin/>}></Route>
          <Route path="/adminHome" element={<AdminHome/>}></Route>

          <Route path="/lecturer-login" element={<LecturerLogin/>}></Route>
          <Route path="/lecturer-signUp" element={<LecturerSignUp/>}></Route>
          <Route path="/lecturer-signIn" element={<LecturerLogin/>}></Route>
          <Route path="/lecturer-home" element={<LectureMainHome/>}></Route>
          <Route path='/lecture-profile' element={<LecturerDetails/>}></Route>

          {/* <Route path="/student-application-for-company/:id" element={<StudentApplicationCompany/> }> </Route> */}
          <Route path ="/" element={<AllStudents/>}></Route>      {/*normally the home page featers at the end*/}
          <Route path='/lecturer-profile' element={<LecturerDetails/>}></Route>
          <Route path="/student-application-for-company/:id" element={<StudentApplicationCompany/>}></Route>
          <Route path="/student-application-for-lecturer/:id" element={<StudentApplicationLecturer/>}></Route>

          <Route path="users/:id/verify/:token" element={<EmailVerify/>} />
          <Route path='/company-home' element={<CompanyHomePage/>}></Route>
          <Route path='/vacancy-page' element={<VacancyPage/>}></Route>
          <Route path='/Response-vac' element={<ResponseVac/>}></Route>
          <Route path='/Company-details(application)' element={<CompanyApplication/>}></Route>
          <Route path='/student-application-for-student' element={<StudentApplicationForStudent/>}></Route>
          <Route path='/job-application/:id' element={<StudentJobApplication/>}></Route>
            <Route path="/home" element={<SignInSignUp/>}></Route>
            <Route path="/all-sign-in" element={<AllSignIn/>}></Route>
            <Route path="/studentDetails" element={<StudentDetails/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>



  );
}


