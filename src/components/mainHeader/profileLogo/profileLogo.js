import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./profileLogo.css";

function ProfileLogo() {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

    // logout handle
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("adminToken");
        console.log("User has been logged out");
        setLoggedIn(false);
        setUser(null);
        window.location = "/grp13";
    };
    const defaultProfileImage = "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";
    return (
        <div>


            {loggedIn ? (
                <DropdownButton id="profile-dropdown" variant="light" align="end" title={user.profilePhoto ? (
                    <img src={user.profilePhoto} alt="Profile Logo" className="profile-logo-img" />
                ) : (
                    <img src={defaultProfileImage} alt="Default Profile Logo" className="profile-logo-img" />
                )}>
                    {/* Add other dropdown items as needed */}
                    <Dropdown.Item>
                        <Link onClick={handleLogout}>
                            Logout
                        </Link>
                    </Dropdown.Item>
                </DropdownButton>
            ) : (
                <DropdownButton id="profile-dropdown" variant="light" align="end" title="Profile">
                    <Dropdown.Item>
                        <Link to="/home">Login</Link>
                    </Dropdown.Item>
                </DropdownButton>
            )}

        </div>
    );
}

export default ProfileLogo;
