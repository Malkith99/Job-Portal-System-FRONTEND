import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import axios from "axios";
import "./CompanyHome.css";
import {URL} from "../../../../../env";


function CompanyHome() {
    const navigate = useNavigate();
    const [jobpool, setJobpool] = useState([]);
    const [responses, setResponses] = useState([]);
    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

    const deleteVacancy = (vacancyId) => {
        const url = URL +`/api/vacancies/${user._id}/${vacancyId}`;
        axios
            .delete(url)
            .then((response) => {
                console.log("Vacancy deleted successfully");
                setJobpool((prevJobpool) =>
                    prevJobpool.filter((vacancy) => vacancy._id !== vacancyId)
                );
            })
            .catch((error) => {
                console.log("Failed to delete vacancy");
                console.error("Failed to delete vacancy:", error);
            });
    };

    const handleVacancyDetails = (vacancy) => {
        setSelectedVacancy(vacancy);
    };

    const handleEditVacancy = (vacancyId) => {
        navigate(`/edit-vacancy/${vacancyId}`);
    };

    const jobVacanciesUrl = URL +`/api/vacancies/${user._id}`;
    const responsesUrl = URL +`/api/responses/${user._id}`;

    useEffect(() => {
        axios
            .get(jobVacanciesUrl)
            .then((response) => {
                setJobpool(response.data);
            })
            .catch((error) => {
                console.log("Failed to fetch job vacancies");
                console.error("Failed to fetch job vacancies:", error);
            });

        axios
            .get(responsesUrl)
            .then((response) => {
                setResponses(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch responses:", error);
            });
    }, []);














    return (

        <>




//table plotting
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Company ID</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Vacancy ID</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Student ID</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Response Date</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Comment</th>
                </tr>
                </thead>
                <tbody>
                {responses.map((response, index) => (
                    response.vacancy.map((vacancy, vacancyIndex) => (
                        vacancy.responses.map((responseItem, responseIndex) => (
                            <tr key={responseItem._id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2' }}>
                                {vacancyIndex === 0 && responseIndex === 0 ? (
                                    <td rowSpan={vacancy.responses.length} style={{ padding: '10px', border: '1px solid #ddd' }}>
                                        {response.companyId}
                                    </td>
                                ) : (
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}></td>
                                )}

                                {responseIndex === 0 ? (
                                    <td rowSpan={vacancy.responses.length} style={{ padding: '10px', border: '1px solid #ddd' }}>
                                        {vacancy.vacancyId}
                                    </td>
                                ) : (
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}></td>
                                )}

                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{responseItem.studentId}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{new Date(responseItem.responseDate).toLocaleString()}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{responseItem.comment}</td>
                            </tr>
                        ))
                    ))
                ))}
                </tbody>
            </table>





            <div className="add-jobs container">
            <div className="container">
                <div className="row btn-row">
                    {/*column1*/}
                    <div className="col scroll-btn-col">
                        <div>
                            <ScrollLink to="vacancySection" smooth={true} duration={500}>
                                <button
                                    type="Submit"
                                    className="scroll-btn text-white"
                                    style={{
                                        backgroundColor: "rgb(38, 56, 95)",
                                        fontSize: "40px",
                                        border: "none",
                                    }}
                                >
                                    Jobs Post Vacancies
                                </button>
                            </ScrollLink>
                        </div>
                    </div>
                    {/*column2*/}
                    <div className="col scroll-btn-col">
                        <div>
                            <ScrollLink to="responsesSection" smooth={true} duration={500}>
                                <button
                                    type="Submit"
                                    className="scroll-btn text-white"
                                    style={{
                                        backgroundColor: "#2B547E",
                                        fontSize: "40px",
                                        border: "none",
                                    }}
                                >
                                    Job Responses
                                </button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
                My Job Pool Section:
            </h1>
            <Element name="vacancySection">
                <div className="jobpoolm responses">
                    {jobpool.map((vacancy, i) => {
                        // Find responses for the current vacancy
                        const vacancyResponses = responses.find(
                            (response) => response.vacancyId === vacancy._id
                        );

                        return (
                            <div key={i} className="response">
                                <h3
                                    className="container2-flex-item1 job-pool-card-title"
                                    style={{ fontSize: "20px" }}
                                >
                                    {vacancy.jobPosition}
                                </h3>
                                <img
                                    className="profile-photo-2"
                                    src={`data:image/jpeg;base64/${vacancy.flyer}`}
                                    alt="Vacancy Flyer"
                                />
                                <p className="job-pool-card-para">{vacancy.description}</p>
                                <p className="additional-details">{vacancy.dueDate}</p>
                                <div className="button-div">
                                    <button
                                        className="btn btn-primary butdet"
                                        onClick={() => {
                                            handleVacancyDetails(vacancy);
                                        }}
                                        style={{
                                            background: "#2B547E",
                                            border: "none",
                                            marginRight: "25px",
                                            marginLeft: "-1px",
                                        }}
                                    >
                                        See the Details
                                    </button>
                                    <button
                                        className="btn btn-primary reject butdet"
                                        onClick={() => {
                                            deleteVacancy(vacancy._id);
                                        }}
                                        style={{
                                            background: "rgb(128, 57, 57)",
                                            marginRight: "5px",
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                                {selectedVacancy && selectedVacancy._id === vacancy._id && (
                                    <div className="vacancy-details">
                                        <h1>Vacancy Details:</h1>
                                        <p>Job Position: {selectedVacancy.jobPosition}</p>
                                        <p>Description: {selectedVacancy.description}</p>
                                        <button
                                            onClick={() =>
                                                handleEditVacancy(selectedVacancy._id)
                                            }
                                        >
                                            Edit
                                        </button>
                                    </div>
                                )}
                                {/* Plot responses for the current vacancy */}
                                {vacancyResponses &&
                                    vacancyResponses.responses.length > 0 && (
                                        <div>
                                            <h1>Responses:</h1>
                                            {vacancyResponses.responses.map(
                                                (response, index) => (
                                                    <div key={index}>
                                                        <p>Student ID: {response.studentId}</p>
                                                        <p>
                                                            Response Date: {response.responseDate}
                                                        </p>
                                                        <p>Comment: {response.comment}</p>
                                                        <button
                                                            onClick={() => {
                                                                navigate(
                                                                    `/response-details/${response._id}`
                                                                );
                                                            }}
                                                        >
                                                            See Details
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </div>
            </Element>






















            <Element name="responsesSection">
                <h1
                    className="cmp-headings loginN"
                    style={{ marginBottom: "2rem" }}
                >
                    Responses Section:
                </h1>
                <div className="responses">
                    {responses.map((response, i) => (
                        <div key={i} className="response responses-sec-response">
                            <h3 className="container2-flex-item1" style={{ fontSize: "20px" }}>
                                {response._id}
                            </h3>
                            {response.vacancy.map((vacancy) => (
                                <div key={vacancy._id}>
                                    <p>Vacancy ID: {vacancy.vacancyId}</p>
                                    {vacancy.responses.map((responseItem) => (
                                        <div key={responseItem._id}>
                                            <p>Student ID: {responseItem.studentId}</p>
                                            <p>Response Date: {new Date(responseItem.responseDate).toLocaleString()}</p>
                                            <p>Comment: {responseItem.comment}</p>
                                            <div className="container" style={{ alignItems: "center" }}>
                                                <button
                                                    className="btn btn-primary butdet"
                                                    onClick={() => {
                                                        navigate(`/response-details/${response._id}`);
                                                    }}
                                                    style={{ background: "#2B547E", marginLeft: "-12px" }}
                                                >
                                                    See the Details
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}

                </div>

            </Element>
        </div>
        </>
    );
}

export default CompanyHome;

