import React from "react";
import "./headerBottom.css";
import {CookieJar} from "tough-cookie"; // Import CookieJar from tough-cookie
import {URL} from "../../../env";

function HeaderBottom(props) {

// Create a new CookieJar instance
    const cookieJar = new CookieJar("");

    // Function to delete the token from localStorage
    function deleteToken() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("Token has been deleted due to inactivity.");
    }

// Set the timer to delete the token after 15 minutes (900,000 milliseconds)
    const inactivityTimeout = 900000; // 15 minutes in milliseconds
    let inactivityTimer;

// Function to reset the inactivity timer
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(deleteToken, inactivityTimeout);
    }

// Attach event listeners to monitor activity
// You can replace "document" with a more specific element where user activity is expected
    document.addEventListener("click", resetInactivityTimer);
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keypress", resetInactivityTimer);
    document.addEventListener("scroll", resetInactivityTimer);
// Add other relevant event listeners for your specific use case

// Start the initial timer
    resetInactivityTimer();




        //cookies
        // Retrieve the value from local storage
         // Set a cookie using tough-cookie
        const cookieValue = JSON.parse(localStorage.getItem("jbusers")) ;
        const cookieName = "jbusers-cookie";
        const cookieOptions = {
            httpOnly: true,
            secure: true,
        };
        const cookie = cookieJar.setCookieSync(`${cookieName}=${cookieValue}`, URL, cookieOptions);
        //console.log("Set Cookie:", cookie);








    return (
    <div class="header-bottom">
      <div className="nav" style={{ height: "50px" }}>
        <nav style={{ width: "100%" }}>
          <div className="nav-bar-content" style={{ alignItems: "center" }}>
            <div className="nav-bar-left">{props.content}</div>
            <div className="nav-bar-right">
              {/*loggedIn ? (
                <span className="ml-auto">
                  <ProfileLogo onLogout={props.onLogout} />
                </span>
              ) : (
                ""
              )*/}
            </div>
          </div>
        </nav>
      </div>
      <p></p>
    </div>
  );
}
export default HeaderBottom;
