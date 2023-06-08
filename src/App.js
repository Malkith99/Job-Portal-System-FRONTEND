
import './App.css';
//import CounterCalss from './components/CounterClass';
//import CounterFunction from './components/CounterFunction';
import Header from './components/Header';                        //import header file from the components
import AddStudent from './components/AddStudent';
import {BrowserRouter , Route, Routes } from "react-router-dom"
import AllStudents from './components/AllStudent';
import Home from './components/Home/Home';
import StudentRegistrationBasicPage from './components/pages/student/studentRegistration/step1/StudentRegistrationBasicPage';
import Profile from './components/pages/student/profile/studentProfileMain';
import StudentSignIn from './components/pages/student/signIn/signIn';
import StudentHome from './components/pages/student/home/StudentHome';
import StudentRegistrationStep_2 from './components/pages/student/studentRegistration/step2/UserDetailsMain';
import StudentAppliation from './components/pages/student/MyApplications/MyApplications';
import CompanySignUp from './components/pages/company/companySignup/companySignup';
import CompanySignIn from './components/pages/company/companyLogin/companyLogin';
import CompanyHome from './components/pages/company/home/CompanyMainHome';
import CompanyProfile from './components/pages/company/companyRegistration/CompanyRegisterMain';
import CompanyJobPool from './components/pages/company/home/companyHome/CompanyJobPool/CompanyJobPool';
import AllResponses from './components/pages/company/studentResponces/allResponces'; 
import ProfileImage from './components/pages/student/profileImage/profileImageMain';
import LecturerSignup from './components/pages/lecturer/lecturerSignup/lecturerSignup';
import CompanyLogin from './components/pages/company/companyLogin/companyLogin';
import EmailVerify from "./components/EmailVerify/index";

function App() {
/*    const [isLogedIn, setIsLogedIn] = useState(true);

  const handlLogOut = () => {
    setIsLogedIn(false);
  }; */
  const user = localStorage.getItem("token"); //Email verification token
  return (

    <BrowserRouter>
        <div>
          {/* <Header/> */}
          <Routes>
          <Route path="/" element ={<Home/>} ></Route>
          <Route path="/student-register" element={<StudentRegistrationBasicPage/> }> </Route>
          <Route path="/student-register-step-2" element={<StudentRegistrationStep_2/> }> </Route>
          <Route path="/student-signIn" element={<StudentSignIn/> }> </Route>
          <Route path="/student-profile" element={<Profile/> }> </Route>
          <Route path="/student-home" element={<StudentHome/> }> </Route>
          <Route path="/student-applications" element={<StudentAppliation/> }> </Route>
          <Route path="/company-signup" element={<CompanySignUp/> }> </Route>
          <Route path="/company-signin" element={<CompanySignIn/> }> </Route>
          <Route path="/company-home" element={<CompanyHome/> }> </Route>
          <Route path="/company-profile" element={<CompanyProfile/> }> </Route>
          <Route path="/company-job-pool" element={<CompanyJobPool/> }> </Route>
          <Route path="/all-student-responces" element={<AllResponses/> }> </Route>
          <Route path="/profileImage" element={<ProfileImage/> }> </Route>
          <Route path="/lecturer-login" element={<LecturerSignup/>}></Route>
          <Route path="/company-login" element={<CompanyLogin/>}></Route>
            <Route path="users/:id/verify/:token" element={<EmailVerify/>} />
          {/* <Route path="/student-application-for-company/:id" element={<StudentApplicatinCompany/> }> </Route> */}
          <Route path ="/" element={<AllStudents/>}></Route>      {/*normaly the home page featers at the end*/}
          </Routes>
        </div>
    </BrowserRouter>
   /*<div className="App">
      <h1>Hello React</h1>
      <CounterCalss/>      /* calling the counter class  */ 
      /*<hr></hr> 
      <CounterFunction/>              
  </div> */
      /*<div>
      <Header/>
      <AddStudent/>
      </div>*/

  
  );
}

export default App;
