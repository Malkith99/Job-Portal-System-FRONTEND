import React,{useState} from 'react'
import MainHeader from '../../mainHeader/mainHeader'
import Footer from '../../../components/footer/footer'
import { Link } from "react-router-dom";
import StudentApplication from './StudentApplication';
import Swal from "sweetalert2";


export const StudentApplicationCompany = ({ isLogedIn, onLogout }) => {


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
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <StudentApplication disabled={true} data={null}/>
        <div className='container'>
          <div className='flex-container1'>

            {/* <div 
              className='container1-flex-item'
            >
              <label for="jobPosition" className="">
                Accepted By
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="jobPosition"
                  placeholder="Name of the Lecturer 1"
                  disabled={true} data={null}
                  // required
                ></input>
              </div>
            </div> */}

            {/* <div 
              className='container1-flex-item'
            >
              <label for="jobPosition" className="">
                Accepted By
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="jobPosition"
                  placeholder="Name of the Lecturer 2"
                  disabled={true} data={null}
                  // required
                ></input>
              </div>
            </div> */}

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
              onClick={Alert}
              className="btn btn-primary accept butdet"
              style={{ background: "rgb(69, 117, 85)", marginRight: "25px",border:"none" }}
            >
              Approve
            </button>
            <button
              onClick={DAlert}
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