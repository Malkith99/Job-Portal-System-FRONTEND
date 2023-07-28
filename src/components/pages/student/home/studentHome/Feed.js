import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../../../env";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
export default function Feed() {
  const navigate = useNavigate();
  const [jobpool, setJobpool] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchJobVacancies = async () => {
      try {
        const response = await axios.get(URL + "/api/vacancies");
        setJobpool(response.data);
      } catch (error) {
        console.error("Failed to fetch job vacancies:", error);
      }
    };

    const fetchCompanies = async () => {
      try {
        const response = await axios.get(URL + "/api/vacancies");
        setCompanies(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchJobVacancies().then(() => {});
    fetchCompanies().then(() => {});
  }, []);

  return (
    <div className="wrapper">
      {jobpool.map((vacancy) => {
        const { _id } = vacancy;
        const items = vacancy.items;

        return (
          <React.Fragment key={_id}>
            {items.map((item, index) => {
              const {
                jobPosition,
                salary,
                dueDate,
                flyer,
                jobDescription,
                companyId,
                
               
              } = item;

              // Find the corresponding company
              const company = companies.find((c) => c._id === companyId);

              return (
                <div>
                  <div key={`${_id}-${index}`} className="card">
                    <div className="imagestyle">
                      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                      <img
                        alt="Card Image"
                        src={`data:image/jpeg;base64/${flyer}`}
                      />
                    </div>
                    <h3
                      className={`card_title ${
                        jobPosition.length > 25 ? "card_title--small" : ""
                      }`}
                    >
                      {jobPosition}
                    </h3>
                    <p className="salary">Salary: {salary}</p>
                    <p className="due-date">Due Date: {dueDate}</p>
                    <p className="due-date">Description: {jobDescription}</p>
                    {company && (
                      <p className="company-name">
                        Company: {company.firstName}
                      </p>
                    )}
                    <div className="button-section">
                      <button
                        className="button-section"
                        onClick={() => {
                          navigate(`/company-vacancy-view-student/${item._id}`);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>



                  <div style={{ marginTop: "30px" }}></div>
                  <Card key={`${_id}-${index}`} className="custom-card1">
                    <div className="image-box">
                      <img
                        alt="Card Image"
                        src={`data:image/jpeg;base64/${flyer}`}
                      />
                    </div>
                    <div >
                        <h3
                    className="title-box" 
                      >
                     Mobitel
                    </h3>
                    </div>
                    <div className="Branch-box">
                      <h5>Colombo,LK</h5>
                    </div>
                    <div className="para-items">

                    <div className="para-box">
                        <p>{jobPosition} </p>
                    </div>
                    <div className="para-box">
                        <p>Online </p>
                    </div>
                    </div>
                    <div className="job-pos-box">
                    <h2>
                        Full-Stack Developer
                    </h2>
                    </div>
                    <div className="intro">
                        <p>
                          Description: {jobDescription}
                        </p>
                    </div>
                    <div className="para-items2" >
                    <div>
                    <p className="salary">$ {salary}/Month</p>

                    </div>
                    <div >
                        <button className="button-style"
                        onClick={() => {
                          navigate(`/company-vacancy-view-student/${item._id}`);
                        }}
                      >
                        Apply Now
                        </button>
                    </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
