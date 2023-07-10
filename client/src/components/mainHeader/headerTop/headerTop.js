import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./headerTop.css";

function HeaderTop() {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));



    // logout handle
    const handleLogout = () => {
        localStorage.removeItem("token");
        console.log("User has been Log Out");
        setLoggedIn(false);
        setUser(null);
        window.location = "/";
    };

    return (
        <div className="main-header-top">
            <div>
                {loggedIn ? (
                    <p className="main-login">
                        <l-text1>
                            Welcome, {user.firstName} {user.lastName}!
                        </l-text1>
                        {/*         */}
                        <button onClick={handleLogout}>Logout</button>
                    </p>
                ) : (
                    <div className="main-notlogin" style={{ color: "white" }}>
                        <l-text1 style={{ marginBottom: "10px", fontSize: "16px" }}>
                            You are not logged in. <Link to="/all-sign-in" style={{ textDecoration: "none", color: "white" }} type="button">(Log In)</Link>
                        </l-text1>
                    </div>

                )}
            </div>
        </div>

    );
}
export default HeaderTop;
