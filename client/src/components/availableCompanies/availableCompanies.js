import React, { useState, useEffect } from "react";
import "./availabaleCompanies.css"

function AvailableCompanies() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then(() => {});
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users");
      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);

        const filteredCompanies = data.users.filter((user) => user.role === "company");
        setFilteredUsers(filteredCompanies);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(`Error retrieving users: ${error.message}`);
    }
  };

  return (
      <>
        <div id="frontpage-course-list">
          <h2 className="loginN">Available Companies</h2>
          <div className="courses frontpage-course-list-all">
            <div className="row">
              {filteredUsers.map((user) => (
                  <div className="col-md-3" key={user.id}>
                    <div className="fp-coursebox">
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
                      <div className="fp-courseinfo">
                        <h5 className="form-label">{`${user.firstName} ${user.lastName}`}</h5>
                      </div>
                    </div>
                  </div>
              ))}
              <div className="clearfix hidexs"></div>
            </div>
          </div>
        </div>
      </>
  );
}

export default AvailableCompanies;
