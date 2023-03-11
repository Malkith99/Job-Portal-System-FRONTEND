import React from "react";
import Footer from "../components/footer";
import Title from "../components/title";
import LecturerNav from "./LecturerNav";
import LecturerTop from "./LecturerTop";
import "./LecturerregisterMain.css";
import Lecturerregister from "./Lecturerregister";
function LecturerregisterMain() {
    return (

        <div>
            <LecturerTop />
            <Title />
            <LecturerNav />
            <Lecturerregister />
            <Footer />
        </div>


    )
}
export default LecturerregisterMain;