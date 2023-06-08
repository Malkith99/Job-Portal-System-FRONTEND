import React from "react";
import { Link } from "react-router-dom";
import Login from "./login/Login";
import Footer from "../../footer/Footer";
import MainHeader from "../../MainHeader/MainHeader";

export default function LoginPage({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/">Login</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div>
        <Login />
      </div>
      <Footer />
    </div>
  );
}
