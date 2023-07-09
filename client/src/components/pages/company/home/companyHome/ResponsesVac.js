import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
import axios from "axios";
export default function ResponseVac({ isLogedIn, onLogout }) {
    const content = (
      <>
         <Link to="/company-home">Company Feed</Link>
        <Link to="/company-profile">Profile</Link>
      </>
    );
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const [responses, setResponses] = useState([]);
    const [jobpool, setJobpool] = useState([]);
    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const navigate = useNavigate();




    const jobVUrl = `http://localhost:4000/api/vacancies/${user._id}`;
    const rUrl = `http://localhost:4000/api/responses/${user._id}`;

    useEffect(() => {
        console.log(user);
        // Fetch job vacancies
        axios.get(jobVUrl)
            .then(response => {
                setJobpool(response.data);
            })
            .catch(error => {
                console.log("Failed to fetch job vacancies");
                console.error('Failed to fetch job vacancies:', error);
            });

        // Fetch responses
        axios.get(rUrl)
            .then(response => {
                setResponses(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch responses:', error);
            });
    }, []);

    const deleteVacancyResponce = (vacancyId) => {
        const url = `http://localhost:4000/api/vacancies/${user._id}/${vacancyId}`;
        axios.delete(url)
            .then(response => {
                console.log('Vacancy deleted successfully');
                // Update the jobpool state by filtering out the deleted vacancy
                setJobpool(prevJobpool => prevJobpool.filter(vacancy => vacancy._id !== vacancyId));
            })
            .catch(error => {
                console.log("Failed to delete vacancy");
                console.error('Failed to delete vacancy:', error);
            });
    };


return(
<div >
<MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
<div >
<div>
<section className="res-sec">
            <div className="container">
           < h4 style={{ fontFamily: "Georgia", marginTop: "2%", padding:"10px" , fontWeight:"bold",color:"darkblue"}}>
       Posted Applications
      </h4>
              <div className="jobpoolm responses">
                {jobpool.map((response, i) => (
                  <div key={i} className="response">
                    <h3
                      className="container2-flex-item1 job-pool-card-title"
                      style={{ fontSize: "20px" }}
                    >
                      {response.jobDescription}
                    </h3>
                      <img className="profile-photo-2" src={`data:image/jpeg;base64/${response.flyer}`} alt="Vacancy Flyer" />
                    <p className="job-pool-card-para">Job Position: {response.jobPosition}</p>
                      <p className="additional-details">Due Date : {response.dueDate}</p>
                      <div className="button-div">
                      <button
                        className="btn btn-primary butdet"
                        onClick={() => {
                          navigate(`/company-job-pool/${response._id}`);
                        }}
                        style={{
                          background: "#2B547E",
                          border: "none",
                          marginRight: "5px",
                          marginLeft: "1px",
                        }}
                      >
                        View 
                      </button>
                      
                      <button
                          className="btn btn-primary butdet"
                          onClick={() => {
                            navigate("/all-student-responces");
                          }}
                          style={{ background: "#2B547E", marginLeft: "5px" }}
                        >
                          View Applications
                        </button>
                        <button
                        className="btn btn-primary reject butdet"
                        onClick={() => {
                            deleteVacancyResponce(response._id);
                        }}
                        style={{
                          background: "rgb(128, 57, 57)",
                          marginRight: "5px",
                          marginLeft:"5px"
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
</div>
</div>
<Footer />

    </div>
);
}