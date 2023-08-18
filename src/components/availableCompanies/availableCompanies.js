import React from "react";
import "./availabaleCompanies.css";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { fetchUsers, fetchVacancies,fetchResponses } from "../../Api/UserApi";

function AvailableCompanies() {
  const { data, isLoading, isError } = useQuery("users", fetchUsers);
  const { data: vacanciesData, isLoading: isLoadingV, isError: isErrorV } = useQuery(
      "vacancies",
      fetchVacancies
  );
  const { data: responsesData, isLoading: isLoadingR, isError: isErrorR } = useQuery(
      "responses",
      fetchResponses
  );

  if (isLoading) {
    return <div style={{ fontFamily: "inherit" }}>Loading...</div>;
  }

  if (isError) {
    toast.error("Server is not running");
    return <p>Server error</p>;
  }

  if (vacanciesData && vacanciesData.length > 0) {
    localStorage.setItem("jbvacancies", JSON.stringify(vacanciesData));
  }
  if (responsesData && responsesData.length > 0) {
    localStorage.setItem("jbresponses", JSON.stringify(responsesData));
  }

  // Assuming data.users is the array of users returned from the API
  const filteredUsers = data.users.filter((user) => user.role === "company");

  if (data.users && data.users.length > 0) {
    localStorage.setItem("jbusers", JSON.stringify(data.users));
  }

  return (
      <>
        <div id="frontpage-course-list">
          <h2 className="text-style">Available Companies</h2>
          <div className="courses frontpage-course-list-all">
            {!isLoading ? (
                <div className="row">
                  {filteredUsers.map((user) => (
                      <div className="col-md-3" key={user.id}>
                        <div className="fp-coursebox">
                          <div className="fp-courseinfo">
                            <h5 className="form-label">{`${user.firstName} ${user.lastName}`}</h5>
                          </div>
                          <div style={{ width: "300px", height: "170px", marginBottom: "30px" }}>
                            <div className="fp-coursethumb">
                              <a href={user.url}>
                                <img src={user.profilePhoto} width="243" height="165" alt="" className="comapny-logo" />
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
