//import { Navbar } from "react-bootstrap";
import Navbar from "../../../../Navbar/navbar";
import Sidebar from "../../../../sideBar/sideBar";
//import Navbar from "../../../components/Navbar/navbar";
import Datatable from "./datatable";
import "./StudentHome.scss"
const StudentHome=() =>{
    return (
        <div className="StudentHome">
            <Sidebar/>
            <div className="homeContainer"> 
            <Navbar/>
           <Datatable/>
           

             </div>
        </div>
    );
};
export default StudentHome; 