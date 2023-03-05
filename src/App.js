import './App.css';
import CounterCalss from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';                        //import header file from the components
import AddStudent from './components/AddStudent';
import {BrowserRouter , Route, Routes } from "react-router-dom"
import AllStudents from './components/AllStudent';


function App() {         
  return (
    <BrowserRouter>
        <div>
          <Header/>
          <Routes>
          <Route path="/add" element ={<AddStudent/>} ></Route>
          <Route path ="/" element={<AllStudents/>}></Route>      {/*normaly ass the home page featers at the end*/}
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
