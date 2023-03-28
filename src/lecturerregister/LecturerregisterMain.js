import React from "react";
import Footer from "../components/footer";
import Title from "../components/title";
import LecturerNav from "./LecturerNav";
import LecturerTop from "./LecturerTop";
import "./LecturerregisterMain.css";
import Lecturerregister from "./Lecturerregister";
import MainHeader from "../components/MainHeader/MainHeader";
import {Link} from 'react-router-dom'


function LecturerregisterMain({isLogedIn, onLogout}) {
    const content = <><Link to="/lecturer">Lecturer Registration</Link></>;
    return (
        <div>
            <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
            <Lecturerregister />
            <Footer />
        </div>


    )
}
export default LecturerregisterMain;