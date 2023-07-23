import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./headerTop.css";
import ProfileLogo from "../profileLogo/profileLogo";
const HeaderTop = (props) => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));


    const handleLogout = () => {
        localStorage.removeItem("token");
        console.log("User has been logged out");
        setLoggedIn(false);
        setUser(null);
        window.location = "/grp13";
    };



    return (
        <><ToastContainer />
        <div className="main-header-top">

            <div>
                {loggedIn ? (
                    <div className="main-login">
                        <l-text1 style={{ marginBottom: "10px", fontSize: "16px" }} >
                            Welcome, {user.firstName} {user.lastName}{" "}
                            <button onClick={handleLogout}>(Logout)</button>
                        </l-text1>

                        {/*<button onClick={handleLogout}>Logout</button>*/}
                  <ProfileLogo class="profileHeader" onLogout={props.onLogout} />

                    </p>

                    </div>

                ) : (
                    <div className="main-notlogin">
                        <l-text1>
                            You are not logged in.{" "}
                            <Link to="/all-sign-in" style={{ textDecoration: "none", color: "white" }} type="button">
                                (Log In)
                            </Link>
                        </l-text1>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default HeaderTop;
