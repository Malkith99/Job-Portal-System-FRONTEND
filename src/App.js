
import './App.css';
//import CounterCalss from './components/CounterClass';
//import CounterFunction from './components/CounterFunction';
import Header from './components/Header';                        //import header file from the components
import AddStudent from './components/AddStudent';
import {BrowserRouter , Route, Routes } from "react-router-dom"
import AllStudents from './components/AllStudent';
import Home from './components/Home/home';
import StudentRegistrationBasicPage from './components/pages/student/studentRegistration/step1/StudentRegistrationBasicPage';
import Profile from './components/pages/student/profile/studentProfileMain';
import StudentSignIn from './components/pages/student/signIn/signIn';
import StudentHome from './components/pages/student/home/StudentHome';
import StudentRegistrationStep_2 from './components/pages/student/studentRegistration/step2/UserDetailsMain';
import StudentAppliation from './components/pages/student/MyApplications/MyApplications';


function App() {
/*   const [isLogedIn, setIsLogedIn] = useState(true);

  const handlLogOut = () => {
    setIsLogedIn(false);
  };
 */
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
          <Route path="/student-application" element={<StudentAppliation/> }> </Route>
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
