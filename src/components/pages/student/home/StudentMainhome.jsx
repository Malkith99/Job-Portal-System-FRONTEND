import React from 'react'
import MainHeader from '../../../mainHeader/MainHeader';
import {Link} from "react-router-dom"
import StudentHome from './studentHome/StudentHome';
import Footer from '../../../footer/Footer';

function StudentMainhome({isLogedIn, onLogout}) {
    
  const content = <><Link to="/">Student Home</Link></>;
  return (
    <div>
    <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
    <StudentHome/>
    <Footer/>
    </div>
  )
}

export default StudentMainhome
