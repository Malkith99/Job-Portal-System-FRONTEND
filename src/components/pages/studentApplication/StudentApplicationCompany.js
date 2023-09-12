import React, {useEffect, useState} from 'react'
import MainHeader from '../../mainHeader/mainHeader'
import Footer from '../../../components/footer/footer'
import {Link, useParams} from "react-router-dom";
import StudentApplication from './StudentApplication';
import Swal from "sweetalert2";
import axios from "axios";
import {toast} from "react-toastify";
import {emailjsServiceId,emailjsTemplateId,emailjsUserId, URL} from "../../../env";
import emailjs from "@emailjs/browser";
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
  const [refree, setRefree] = useState(student ? student.refree : "");
  const[lecturer,setLecturer]=useState("");

  useEffect(() => {
    // This effect will run whenever the 'refree' state changes
    const selectedRefree = storedData.find(user => user._id === refree);
    if (selectedRefree) {
      setLecturer(selectedRefree);
    } else {
      setLecturer(""); // Reset if user not found
    }
  }, [refree, storedData]);

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

      // Send email using EmailJS Dont delete or uncomment this
      console.log(student.email);
      console.log(lecturer);


      // Construct the email parameters object
      const templateParams1 = {
        to_email: student.email,
        to_name: student.firstName,
        message: " A company Requested for your reference. Please login to your account Check your application status.",
        // Add other template variables as needed
      };
      const templateParams2 = {
        to_email: lecturer.email,
        to_name: lecturer.firstName,
        message: " A company Requested for your reference. Please login to your account and approve or reject the request.",
        // Add other template variables as needed
      };
      // Send email using EmailJS
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams1, emailjsUserId);//for student
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams2, emailjsUserId);//for lecturer




      // Display a success toast message
      toast.success('Application submitted successfully!');

      // Add any additional logic or feedback to the user
    } catch (error) {
      console.error(error);

      if (error.response && error.response.data.error === 'You have already submitted refree Request.') {
        showAlert('You have already requested for this vacancy.');
        // Display a toast with the error message
        toast.info('You have already requested for this vacancy.');
      } else {
        showAlert('Failed to submit application. Please try again later.');
        // Display a generic error message
        toast.error('Failed to submit application. Please try again later.');
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
        toast.info('You have already recommended for this vacancy.');
      } else {
        console.log('Response saved:', response.data);

        // Display a success toast message
        toast.success('Application submitted successfully!');
      }

      // Add any additional logic or feedback to the user
    } catch (error) {
      console.error(error);
      toast.error('Application Not submitted !');
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
        {alertMessage && (
            <div className="alert">
              {alertMessage}
              <button onClick={() => setAlertMessage('')}>&times;</button>
            </div>
        )}
        <Footer/>
      </div>
  )
}
export default StudentApplicationCompany;