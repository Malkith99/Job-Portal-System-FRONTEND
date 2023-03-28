import React from 'react'
import Login from "./Login";
import Footer from "./footer";
import Headertop from "./headertop";
import Title from "./title";
import Headerbottom from "./headerbottom";
import MainHeader from './MainHeader/MainHeader';
import {Link} from 'react-router-dom'

function home({isLogedIn, onLogout}) {
  
  const content = <><Link to="/">Login</Link></>;
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
      <div className="content-wrap"></div>
      <div>
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default home;