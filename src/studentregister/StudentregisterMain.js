import React from "react";
import Footer from "../components/footer";
import Title from "../components/title";
import StudentNav from "./StudentNav";
import StudentTop from "./StudentTop";
import Studentregister from "./Studentregister";
import "./StudentregisterMain.css";

function StudentregisterMain() {
    return (

        <div>
            <StudentTop />
            <Title />
            <StudentNav />
            <Studentregister />
            <Footer />
        </div>


    )
}
export default StudentregisterMain;