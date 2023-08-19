import React, {useEffect, useState} from 'react'
import MainHeader from '../../mainHeader/mainHeader'
import Footer from '../../../components/footer/footer'
import { Link } from "react-router-dom";
import StudentApplication from './StudentApplication';
import Swal from "sweetalert2";
import axios from "axios";
import {URL} from "../../../env";
import {toast} from "react-toastify";


export const StudentApplicationCompany = ({ isLogedIn, onLogout }) => {

  const urlParams = new URLSearchParams(window.location.search);
  const studentParam = urlParams.get('student');
  const responseItemParam = urlParams.get('responseItem');
// Parse the JSON-encoded strings back into objects
  const student = JSON.parse(decodeURIComponent(studentParam));
  const responseItem = JSON.parse(decodeURIComponent(responseItemParam));
console.log(responseItem);
  const [approve, setApprove] = useState("");
  const [alertMessage, setAlertMessage] = useState('');
  const showAlert = (message) => {
    setAlertMessage(message);
    alert(message);
  };
  const handleApply = async () => {
    try {
      const newResponse = {
        approved: approve
      };
      const url = URL+'/api/responses/' + responseItem;
      const response = await axios.patch(url, newResponse);
      console.log('Response saved:', response.data);

      // Display a success toast message
      toast.success('Application submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      showAlert('Application approved successfully!');

      // Add any additional logic or feedback to the user
    } catch (error) {
      console.error(error);

      if (
          error.response &&
          error.response.data.error === 'Student has already applied for this vacancy'
      ) {
        showAlert('You have already applied for this vacancy.');
        // Display a toast with the error message
        toast.error('You have already applied for this vacancy.', {
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
  const handleApprove = () => {
    setApprove(true);
    Alert();
    handleApply().then(r => {});
  };

  const handleReject = () => {
    setApprove(false);
    DAlert();
    handleApply().then(r => {});
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
        Swal.fire('Rejected!', '', 'success')
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