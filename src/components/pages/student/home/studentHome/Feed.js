import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Feed.css";
import {useNavigate} from "react-router-dom";
import {URL} from "../../../../../env";
import Card from "@mui/material/Card";

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
      console.error("Error retrieving jbusers from local storage:", error.message);
      return null; // Return null in case of an error
    }
  };
  return (
    <div className="wrapper">
      {jobpool.map((vacancy) => {
        const { _id } = vacancy;
        const items = vacancy.items;
          const companyId = vacancy.userId;
        return (
          <React.Fragment key={_id}>
            {items.map((item, index) => {
              const {
                jobPosition,
                salary,
                dueDate,
                flyer,
              companyEmail,
                jobDescription


              } = item;

              // Find the corresponding company
              const company = findCompanyById(companyId);

              return (
                <div>

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
                          {company.firstName}   {company.lastName}
                    </h3>
                    </div>
                    <div className="Branch-box">
                      <h5>{company.location}</h5>
                    </div>
                    <div className="para-items">

                    <div className="para-box">
                        <p>{dueDate} </p>
                    </div>
                    <div className="para-box">
                        <p>{companyEmail}</p>
                    </div>
                    </div>
                    <div className="job-pos-box">
                    <h2>
                      {jobPosition}
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
