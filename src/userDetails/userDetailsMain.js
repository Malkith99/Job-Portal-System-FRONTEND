import React from 'react'
import Footer from "../components/footer";
import Title from "../components/title";
import UserDetailsNav from "./userDetailsNav";
import UserDetailsTop from "./userDetailsTop";
import UserDetails from "./UserDetails";
import MainHeader from '../components/MainHeader/MainHeader';
import "./userDetailsMain.css";
import {Link} from 'react-router-dom'

function userDetailsMain({isLogedIn, onLogout}) {
  const content = <><Link to="/student-register">Student Registration</Link><Link to="/student-register">Step 1</Link><Link to="/student-register-final">Step 2</Link></>;
  return (
    <>
      <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
        <UserDetails />
        <Footer />
      </div>
    </>
  )
}

export default userDetailsMain