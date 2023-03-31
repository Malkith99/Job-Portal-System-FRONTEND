import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Sidebar = () => {
  return (
    <div className='sidebar'> 
     {/* <div className ="top"> 

    <span className="logo">Home Page</span>
    </div>
     <hr/>  */}
    <div className ="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon/>
          <span> Dashboard</span></li>
        <li>
          <ArticleOutlinedIcon/>
          <span> My Applications</span></li>
          <p className="title">LOGS</p>
        <li>
          <ApartmentIcon/>
          <span> Company</span></li>

        
        <li>
          <AssuredWorkloadIcon/>
          <span> Lecturer</span></li>

        
        <li>
          <AssignmentIndIcon/>
          <span> Student</span></li>
          <p className="title">USER</p>
        <li>
          <Person2OutlinedIcon/>
          <span> Profile</span></li>
          <li>
          <LoginOutlinedIcon/>
          <span> Logout</span></li>
          <p className="title">OTHER</p>
        <li>
          <CircleNotificationsOutlinedIcon/>
          <span> Notifications</span></li>
      </ul>
    </div>
   
     </div>
  )
}

export default Sidebar