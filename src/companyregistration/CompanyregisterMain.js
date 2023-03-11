import React from "react";
import Footer from "../components/footer";
import Title from "../components/title";
import CompanyNav from "./CompanyNav";
import CompanyTop from "./CompanyTop";
import Companyregister from "./Companyregister";
import "./CompanyregisterMain.css";

function CompanyregisterMain() {
    return (

        <div>
            <CompanyTop />
            <Title />
            <CompanyNav />
            <Companyregister />
            <Footer />
        </div>


    )
}
export default CompanyregisterMain;