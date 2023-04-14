import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="region">
      <div className="line">
        {/* <div className ="top"> 

            <span className="logo">Home Page</span>
            </div>
            <hr/>  */}
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon />
              <span> <Link to="/student/home">Home</Link></span>
            </li>
            <li>
              <ArticleOutlinedIcon />
              <span>
                <Link to="/student/MyApplications">My Applications</Link>
              </span>
            </li>
            <p className="title">USER</p>
            <li>
              <Person2OutlinedIcon />
              <span> Profile</span>
            </li>
            <li>
              <LoginOutlinedIcon />
              <span> Logout</span>
            </li>
            <p className="title">OTHER</p>
            <li>
              <CircleNotificationsOutlinedIcon />
              <span> Notifications</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
