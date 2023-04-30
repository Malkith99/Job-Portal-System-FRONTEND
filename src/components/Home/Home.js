import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import MainHeader from "../../components/mainHeader/mainHeader";
import "./home.css";

export default function Home({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/">Home</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div className="container">
        <div className="d-flex flex-lg-row flex-column">
          <div className="home-left-div p-4 w-100 ">
            <h1 className="main-head">About</h1>
            <p className="text-left">
              Voluptate est magna sint ad pariatur. Voluptate sit nostrud qui
              mollit eiusmod duis aliqua. Non ullamco aute et nulla. Pariatur
              irure magna ad sit qui occaecat. Exercitation eiusmod nulla
              excepteur sunt ipsum labore. Sint est enim quis occaecat qui
              adipisicing. Cupidatat dolor reprehenderit irure enim. Consectetur
              irure ut sunt tempor veniam eiusmod proident sit. Sit proident
              reprehenderit laboris laboris mollit. Aliquip aute nisi sint qui
              incididunt incididunt eu deserunt pariatur occaecat qui
              adipisicing. Veniam sint adipisicing cupidatat sunt est consequat
              excepteur. Enim ipsum anim non eu amet ut. Proident elit commodo
              est sint enim. Consequat dolore consequat dolor laborum ullamco
              Lorem duis nulla sunt officia.
            </p>
            
          </div>
          <div className="home-right-div p-4 w-100 d-flex flex-column">
            <h1 className="main-head">Are you?</h1>
            <Link to="/student-register" type="button" className="form-control text-white student-button btn btn-primary m-2">
              A Student
            </Link>
            <Link to="/lecturer-login" type="button" className="form-control text-white student-button btn btn-primary m-2">
              A Lecturer
            </Link>
            <Link to="/company-login" type="button" className="form-control text-white student-button btn btn-primary m-2">
              A Company
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

