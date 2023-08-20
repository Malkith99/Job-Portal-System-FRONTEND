import React, {useEffect, useState} from 'react'
import MainHeader from '../../../components/mainHeader/mainHeader'
import Footer from '../../footer/footer'
import {Link, useParams} from "react-router-dom";
import StudentApplication from './StudentApplication';
import Swal from "sweetalert2";
import {URL} from "../../../env";
import axios from "axios";
import {toast} from "react-toastify";

export const StudentApplicationLecturer = ({ isLogedIn, onLogout }) => {

    const { id } = useParams();
    const paramsParts = id.split("&");
    const extractedId = paramsParts[0];
    const extractedStudentId = paramsParts[1] || ""; // In case studentid is not present
    const extractedCompanyId = paramsParts[2] || ""; // Extracting companyId from the id

    console.log("id:", extractedId);
    console.log("studentid:", extractedStudentId);
    console.log("companyId:", extractedCompanyId);

    const storedData = JSON.parse(localStorage.getItem("jbusers"));
    const student = storedData.find(user => user._id === extractedStudentId);
    console.log(student);
    const [refree] = useState(student ? student.refree : "");
    const [recommendations, setRecommendations] = useState([]);
    const [comment, setComment] = useState(recommendations.length > 0 ? recommendations[0].comment : "");
    console.log(recommendations);
    const [isCommentError, setIsCommentError] = useState(false);

    const handleApply = async () => {
        try {
            if (comment.trim() === "") {
                // Display a toast with the error message
                toast.error("Please provide a comment.");
                return;
            }

            const newResponse = {
                companyId: extractedCompanyId,
                lecturerId: refree,
                studentId: extractedStudentId,
                vacancyId: extractedId,
                recommended: "recommended",
                comment: comment,
            };
            const url = URL + '/api/recommendations';
            const response = await axios.post(url, newResponse);
            console.log('Response saved:', response.data);

            // Display a success toast message
            toast.success('Application submitted successfully!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });

            // Add any additional logic or feedback to the user
        } catch (error) {
            console.error(error);

            if (error.response && error.response.data.error === 'You have already submitted refree Request.') {
                // Display a toast with the error message
                toast.info('You have already requested for this vacancy.');
            } else {
                // Display a generic error message
                toast.error('Failed to submit application. Please try again later.');
            }
        }
    };


    useEffect(() => {
        // Fetch recommendations from the server
        axios.get(URL+'/api/recommendations')
            .then(response => {
                // Find a recommendation based on studentId and vacancyId
                const matchingRecommendation = response.data.find(recommendation => recommendation.studentId === extractedStudentId && recommendation.vacancyId === extractedId);
                setRecommendations(matchingRecommendation);
                setComment(matchingRecommendation.comment);
                // Log the recommendation to the console
                console.log('Matching Recommendation:', matchingRecommendation);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, []);







    const content = (
        <>
            <Link to="/lecturer-home">Home</Link>
        </>
    );

    const handleApproveClick = () => {
        if (comment.trim() === "") {
            // Display a toast with the error message
            toast.error("Please provide a comment.");
            return;
        }

        Swal.fire('Approved', 'Successfully', 'success').then(() => {
            handleApply().then(() => {});
        });
    };
    return (
        <div>
            <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
            <StudentApplication disabled={true} data={null} />

            <div className='container'>
                <div className="button-div">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        onClick={handleApproveClick}
                        className="btn btn-primary accept butdet"
                        style={{ background: "rgb(69, 117, 85)", marginRight: "25px", border: "none" }}
                        disabled={comment.trim() === ""}
                    >
                        Approve
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StudentApplicationLecturer;