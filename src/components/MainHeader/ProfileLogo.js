import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileLogo.css';

function ProfileLogo(props) {
  return (
    <DropdownButton
      id="profile-dropdown"
      variant="light"
      title={<img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=" alt="Profile Logo" className='profile-logo-img'/>}
      align="end"
    >
      <Dropdown.Item><Link to="/company-details">Profile</Link></Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item><Link to="/" onClick={props.onLogout} >Logout</Link></Dropdown.Item>
    </DropdownButton>
  )
}

export default ProfileLogo