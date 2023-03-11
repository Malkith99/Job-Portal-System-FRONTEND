import React from 'react'
import Footer from "../components/footer";
import Title from "../components/title";
import UserDetailsNav from "./userDetailsNav";
import UserDetailsTop from "./userDetailsTop";
import UserDetails from "./UserDetails";
import "./userDetailsMain.css";

function userDetailsMain() {
  return (
    <>
      <div>
        <UserDetailsTop />
        <Title />
        <UserDetailsNav />
        <UserDetails />
        <Footer />
      </div>
    </>
  )
}

export default userDetailsMain