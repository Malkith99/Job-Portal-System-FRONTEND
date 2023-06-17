import React, {useState} from "react";
import { Link } from 'react-router-dom';
import "./headerTop.css";

function HeaderTop(props) {

    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

    // logout handle
    const handleLogout = () => {
        localStorage.removeItem('token');
        console.log('User has been Log Out');
        setLoggedIn(false);
        window.location = '/';
    };

  return (
    <div class="header-top">
      <div>
{         <p className="notloggin">
          {loggedIn ? (<button  onClick={handleLogout}>
              Logout
          </button>) : (
              <div className="Logbutton">
                  <l-text1>Signup or SignIn?</l-text1>
                  <button className="logbar-item">
                      <Link to="/home" className="loginl">
                          Log In
                      </Link>
                  </button>
              </div>
          )}
        </p> }
      </div>
    </div>
  );
}
export default HeaderTop;
