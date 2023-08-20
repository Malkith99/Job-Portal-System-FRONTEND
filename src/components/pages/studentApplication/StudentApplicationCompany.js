import React, {useEffect, useState} from 'react'
import MainHeader from '../../mainHeader/mainHeader'
import Footer from '../../../components/footer/footer'
import {Link, useParams} from "react-router-dom";
import StudentApplication from './StudentApplication';
import Swal from "sweetalert2";
import axios from "axios";
import {URL} from "../../../env";
import {toast} from "react-toastify";

export const StudentApplicationCompany = ({ isLogedIn, onLogout }) => {


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
  const [refree, setRefree] = useState(student ? student.refree : "");

  const [approve, setApprove] = useState("");
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    alert(message);
  };
  const handleApply = async () => {
    try {
      const newResponse = {
        companyId: extractedCompanyId,
        lecturerId: refree,
        studentId: extractedStudentId,
        vacancyId: extractedId,
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
        showAlert('You have already requested for this vacancy.');
        // Display a toast with the error message
        toast.info('You have already requested for this vacancy.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        showAlert('Failed to submit application. Please try again later.');
        // Display a generic error message
        toast.error('Failed to submit application. Please try again later.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    }
  };

  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    // Fetch recommendations from the server
    axios.get(URL+'/api/recommendations')
        .then(response => {
          // Filter recommendations based on studentId and vacancyId
          const filteredRecommendations = response.data.filter(recommendation => recommendation.studentId === extractedStudentId && recommendation.vacancyId === extractedId);
          setRecommendations(filteredRecommendations);

          // Log the recommendations to the console
          console.log('Filtered Recommendations:', filteredRecommendations);
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);
        });
  }, []);





  const handleApproved = async (approved) => {
    try {
      const newResponse = {
        companyId: extractedCompanyId,
        lecturerId: refree,
        studentId: extractedStudentId,
        vacancyId: extractedId,
        approved: approved, // Pass the boolean value directly
      };

      const url = URL + '/api/recommendations';
      const response = await axios.post(url, newResponse);

      if (response.data.message === 'Recommendation already updated') {
        showAlert('You have already recommended for this vacancy.');
        // Display a toast with the message
        toast.info('You have already recommended for this vacancy.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        console.log('Response saved:', response.data);

        // Display a success toast message
        toast.success('Application submitted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }

      // Add any additional logic or feedback to the user
    } catch (error) {
      console.error(error);

      // Handle error
    }
  };










  const handleApprove = () => {
    setApprove(true);
    Alert();
    handleApproved(true).then(r => {});
  };

  const handleReject = () => {
    setApprove(false);
    DAlert();
  };
  const content = (
    <>
      <Link to="/company-HomePage">Home</Link>
      <Link to="/all-student-responces">Application</Link>
    </>
  );
  const Alert = () =>{
    Swal.fire('Approved', 'Succesfully',
    'success')
  }
  const DAlert = () =>{
    Swal.fire({
      title: 'Do you want to reject the application?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
        customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Rejected!', '', 'success').then(r => {})
        handleApproved(false).then(r => {});
      }
    })

  }
  const RAlert = () =>{
    Swal.fire({
      title: 'Do you want to request from the refree?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Requested!', '', 'success')
        handleApply().then(r => {});
      } else if (result.isDenied) {
        Swal.fire('Not Requested', '', 'info')
      }
    })

  }

  return (
    <div>

      {alertMessage && (
          <div className="alert">
            {alertMessage}
            <button onClick={() => setAlertMessage('')}>&times;</button>
          </div>
      )}
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />

      <StudentApplication disabled={true} data={null}/>

        <div className='container'>
          <div className='flex-container1'>
            <input
                type="text"
                className="form-control"
                placeholder="Recommendations"
                value={recommendations.map(recommendation => recommendation.comment).join(', ')}
                disabled
            />
            </div>
          </div>
          <div className='container'>
          <div className="button-div">

            <button
              onClick={RAlert}
              className="btn btn-primary accept butdet mb-3"
              style={{ background: "rgb(7, 7, 73)", marginRight: "25px",border:"none" }}
            >
              Request Reference
            </button>

          </div>
        </div>

        <div className='container mb-3'>
          <div className="button-div">

            <button
              onClick={handleApprove}
              className="btn btn-primary accept butdet"
              style={{ background: "rgb(69, 117, 85)", marginRight: "25px",border:"none" }}
            >
              Approve
            </button>
            <button
              onClick={handleReject}
              className="btn btn-primary reject butdet"
              style={{ background: "rgb(128, 57, 57)", marginRight: "25px",border:"none" }}
            >
              Reject
            </button>
          </div>
        </div>

        <Footer/>
    </div>
  )
}
export default StudentApplicationCompany;