import React from "react";
import Footer from "../components/footer";
import Title from "../components/title";
import CompanyNav from "./CompanyNav";
import CompanyTop from "./CompanyTop";
import MainHeader from "../components/MainHeader/MainHeader";
import Companyregister from "./Companyregister";
import "./CompanyregisterMain.css";
import {Link} from 'react-router-dom'

function CompanyregisterMain({isLogedIn, onLogout}) {
    const content = <><Link to="/company">Company Registration</Link></>;
    return (
        <div>
            <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
            <Companyregister />
            <Footer />
        </div>


    )
}
export default CompanyregisterMain;