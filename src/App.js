import './App.css';
import CounterCalss from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';                        //import header file from the components
import AddStudent from './components/AddStudent';
import {BrowserRouter , Route, Routes } from "react-router-dom"
import AllStudents from './components/AllStudent';
import Home from './components/Home/Home';
import StudentRegistrationBasicPage from './components/pages/student/studentRegistration/step1/StudentRegistrationBasicPage';
import Profile from './components/pages/student/profile/profile';


function App() {         
  return (
    <BrowserRouter>
        <div>
          <Header/>
          <Routes>
          <Route path="/" element ={<Home/>} ></Route>
          <Route path="/student-register" element={<StudentRegistrationBasicPage/> }> </Route>
          <Route path="/student-profile" element={<Profile/> }> </Route>
          <Route path="/add" element ={<AddStudent/>} ></Route>
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
