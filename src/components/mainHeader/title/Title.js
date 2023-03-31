import React from "react";
import { Link } from "react-router-dom"
import uniLogo from "../../../images/University-of-Ruhuna-Logo-removebg 1.png";
import "./Title.css";

function Title() {
  return (
    <div className="container-fluid title-top">
      <div className="d-flex">
        <Link to="/">
          <img
            className="p-2 d-inline-block align-text-top uniLogo"
            src={uniLogo}
            alt="Logo"
          />
        </Link>
        <div className="p-2 flex-grow-1 text-center title">
          <div>
            <b>Job Portral System UOR</b>
          </div>
          {/* <div><span className="bot-title">University of Ruhuna</span></div> */}
        </div>
      </div>
    </div>
  );
}
export default Title;
