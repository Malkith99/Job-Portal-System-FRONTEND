import React from 'react'
import Login from "./Login";
import Footer from "./footer";
import Headertop from "./headertop";
import Title from "./title";
import Headerbottom from "./headerbottom";

function home() {
  return (
    <div className="page-container">
      <Headertop />
      <Title />
      <Headerbottom />
      <div className="content-wrap"></div>
      <div>
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default home;