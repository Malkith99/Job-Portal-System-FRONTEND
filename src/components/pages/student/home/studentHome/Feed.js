import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../../../env";
import Card from "@mui/material/Card";
function truncateTextToWords(text, wordCount) {
  const words = text.split(' ');
  const truncatedWords = words.slice(0, wordCount);
  return truncatedWords.join(' ');
}
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
        const response = await axios.get(URL + "/api/users");
        setCompanies(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchJobVacancies().then(() => {});
    fetchCompanies().then(() => {});
  }, []);
  
  // Later in the component
  const findCompanyById = (companyId) => {
    try {
      const jbusers = JSON.parse(localStorage.getItem("jbusers"));
      console.log(companyId);
      // Display company name
      const company = jbusers.find((company) => company._id === companyId);

      if (company) {
        // If a company is found with the given companyId, you can access its data
        console.log("Company Name:", company.firstName, company.lastName);
        return company; // Return the company data
      } else {
        console.log("Company not found");
        return null; // Return null if the company is not found
      }
    } catch (error) {
      console.error(
        "Error retrieving jbusers from local storage:",
        error.message
      );
      return null; // Return null in case of an error
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "center",
      }}
    >
      {jobpool.map((vacancy) => {
        const { _id } = vacancy;
        const items = vacancy.items;
        const companyId = vacancy.userId;
        return (
          <React.Fragment key={_id}>
            {items.map((item, index) => {
              const { jobPosition, salary, dueDate, flyer, jobDescription } =
                item;

              // Find the corresponding company
              const company = findCompanyById(companyId);
// Truncate the job description to 100 words
const truncatedJobDescription = truncateTextToWords(jobDescription, 30);

              return (
                <div
                  className="com-card"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "1%",
                  }}
                >
                  <Card key={`${_id}-${index}`} className="custom-card1">
                    <div className="imagestyle">
                      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                      <img
                        alt="Card Image"
                        src={`data:image/jpeg;base64/${flyer}`}
                      />
                    </div>
                    <h3 className="title-box">
                      {company.firstName} {company.lastName}
                    </h3>
                    <div className="Branch-box">
                      <h5>{company.location}</h5>
                    </div>
                    <div className="" style={{ marginBottom: "-20px" }}>
                      <p>{jobPosition} </p>
                    </div>
                    <div className="">
                      <p>Online </p>
                    </div>
                    <div
                      className="job-pos-box"
                      style={{ marginBottom: "-5px" }}
                    >
                      <h2>{jobPosition}</h2>
                    </div>

                    <div style={{ alignItems: "center" }}>
                      <div
                        className="intro"
                        style={{
                          //marginBottom: "-20px",
                          alignContent: "center",
                        }}
                      >
                        <div className="paragraph">
                          <p> {truncatedJobDescription} </p>
                          <p>Read more ...</p>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: "auto",
                        alignSelf: "flex-end",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: "30px",
                        marginLeft: "0",
                      }}
                    >
                      <div className="para-items2">
                        <div style={{ margin: "2%" }}>
                          <p className="salary">$ {salary}/Month</p>
                        </div>
                        <div>
                          <button
                            className="button-style"
                            style={{ margin: "2%" }}
                            onClick={() => {
                              navigate(
                                `/company-vacancy-view-student/${item._id}`
                              );
                            }}
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                      <div
                        className="intro"
                        style={{ marginTop: "auto", alignSelf: "flex-end" }}
                      >
                        <p>Due Date: {dueDate}</p>
                      </div>
                      {/* </div> */}
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
