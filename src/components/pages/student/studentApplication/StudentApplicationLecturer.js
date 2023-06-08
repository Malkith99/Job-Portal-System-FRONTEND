import React,{useState} from 'react'
import MainHeader from '../../../MainHeader/MainHeader'
import Footer from '../../../footer/Footer'
import { Link } from "react-router-dom";
import StudentApplication from './StudentApplication';


export const StudentApplicationLecturer = ({ isLogedIn, onLogout }) => {

  const content = (
    <>
      <Link to="/lecture/home">Lecturer Home</Link>
    </>
  );
  return (
    <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <StudentApplication disabled={true} data={null}/>
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