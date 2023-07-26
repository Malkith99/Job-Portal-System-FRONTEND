import React, { useState, useEffect } from "react";
import "./availabaleCompanies.css";
import { URL } from "../../env";
import { toast } from "react-toastify";

function AvailableCompanies() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isServerRunning, setServerRunning] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "/api/users");
        const data = await response.json();

        if (response.ok) {
          setUsers(data.users);
          setServerRunning(true);
          const filteredCompanies = data.users.filter((user) => user.role === "company");
          setFilteredUsers(filteredCompanies);
        } else {
          console.log(data.message);
          setServerRunning(false);
        }
      } catch (error) {
        console.error(`Error retrieving users: ${error.message}`);
        setServerRunning(false);
        toast.error("Server is not running");
      }


    };

    const initialTimer = setTimeout(() => {
      fetchData().then(() => {});
    }, 1000); // Initial delay of 1 second

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  if (isServerRunning === null) {
    return <div style={{fontFamily:"inherit"}} >Loading...</div>; // Show a loading message while checking server status
  }




  return (
      <>
        <div id="frontpage-course-list">
          <h2 className="text-style">Available Companies</h2>
          <div className="courses frontpage-course-list-all">
            {isServerRunning ? (
                <div className="row" >
                  {filteredUsers.map((user) => (
                      <div className="col-md-3" key={user.id}>
                        <div className="fp-coursebox">
                        <div className="fp-courseinfo">
                            <h5 className="form-label">{`${user.firstName} ${user.lastName}`}</h5>
                          </div>
                          <div style={{ width: '300px', height: '170px',marginBottom:"30px" }}>
                            
                          <div className="fp-coursethumb">
                            <a href={user.url}>
                              <img
                                  src={user.profilePhoto}
                                  width="243"
                                  height="165"
                                  alt=""
                                  className="comapny-logo"
                                  
                              />
                            </a>
                          </div>
                          </div>
                          
                        </div>
                      </div>
                  ))}
                  <div className="clearfix hidexs"></div>
                </div>
            ) : (
                <p>Server error</p>
            )}
          </div>
        </div>
      </>
  );
}

export default AvailableCompanies;
