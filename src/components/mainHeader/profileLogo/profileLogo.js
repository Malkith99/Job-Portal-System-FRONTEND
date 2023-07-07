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
        console.log("User has been logged out");
        setLoggedIn(false);
        setUser(null);
        window.location = "/";
    };

    return (
        <div>
            {loggedIn ? (
                <DropdownButton id="profile-dropdown" variant="light" align="end" title={user.profilePhoto && (
                    <img src={user.profilePhoto} alt="Profile Logo" className="profile-logo-img" />
                )}>
                    {/*
                    <Dropdown.Item>
                        <Link to="/students-details">Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    */}

                    <Dropdown.Item>
                        <Link to="/" onClick={handleLogout}>
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
