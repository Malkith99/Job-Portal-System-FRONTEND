import React,{useState} from 'react'
import MainHeader from '../../../mainHeader/MainHeader'
import Footer from '../../../footer/Footer'
import { Link } from "react-router-dom";
import StudentApplication from './StudentApplication';


export const StudentApplicationCompany = ({ isLogedIn, onLogout }) => {


  const content = (
    <>
      <Link to="/company/home">Home</Link>
      <Link to="/all-student-responces">Responces</Link>
      <Link to="/student-application-for-company">Application</Link>
    </>
  );
  return (
    <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <StudentApplication disabled={true} data={null}/>
        <div className='container'>
          <div className='flex-container1'>

            <div 
              className='container1-flex-item'
            >
              <label for="jobPosition" className="">
                Accepted By
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="jobPosition"
                  placeholder="Name of the Lecturer 1"
                  disabled={true} data={null}
                  // required
                ></input>
              </div>
            </div>

            <div 
              className='container1-flex-item'
            >
              <label for="jobPosition" className="">
                Accepted By
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="jobPosition"
                  placeholder="Name of the Lecturer 2"
                  disabled={true} data={null}
                  // required
                ></input>
              </div>
            </div>

            </div>
          </div>

        <div className='container'>
          <div className="button-div">
            
            <button
              className="btn btn-primary accept butdet"
              style={{ background: "rgb(69, 117, 85)", marginRight: "25px" }}
            >
              Approve
            </button>
            <button
              className="btn btn-primary reject butdet"
              style={{ background: "rgb(128, 57, 57)", marginRight: "25px" }}
            >
              Reject
            </button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
