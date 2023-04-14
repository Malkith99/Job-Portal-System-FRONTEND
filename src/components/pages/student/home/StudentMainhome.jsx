import React from 'react'
import MainHeader from '../../../mainHeader/MainHeader';
import {Link} from "react-router-dom"
import StudentHome from './studentHome/StudentHome';
import Footer from '../../../footer/Footer';

function StudentMainhome({isLogedIn, onLogout}) {
    
  return (
    <div>
  <strong>  <MainHeader content={'Student Home'} isLogedIn={isLogedIn} onLogout={onLogout}/></strong>
    <StudentHome/>
    <h1>hhhhhhhhhhh</h1>
    <Footer/>
    </div>
  )
}

export default StudentMainhome
