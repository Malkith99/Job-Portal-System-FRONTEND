import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import CompanyRegister from '../companyRegistration/companyRegister/CompanyRegister'
import "./CompanyProfile.css";

export const CompanyProfile = () => {
  return (
    <div className='container'>

      <div className='flex-container1'>
        <div className='container1-flex-item'>
        <p className='' style={{fontSize:"30px"}}>My Profile:</p>
          <span className=''>Company Name:</span>
          <p className='profile form-control'>Name of the Company</p>
        </div>

        <div className='container1-flex-item'>
          <span className=''></span>
          <p className='profile'></p>
        </div>

      </div>

      <div className='flex-container1'>

 
      <div className='container1-flex-item'>
          <span className=''>Contact Info:</span>
          <p className='profile form-control'>Contact Info of the Company</p>
        </div>

        <div className='container1-flex-item'>
          <span className=''>Company Website:</span>
          <p className='profile form-control'>Website of the Company</p>
        </div>
      
      </div>

      <div className='flex-container1'>

      <div className='container1-flex-item'>
          <span className=''>Position/Destination:</span>
          <p className='profile form-control'>Position/Destination</p>
        </div>

        <div className='container1-flex-item'>
          <span className=''>Location:</span>
          <p className='profile form-control'>Location of the Company</p>
        </div>
      </div>

      <div className='flex-container1'>
        
        <div className='container1-flex-item'>
          <span className=''>Salary Range:</span>
          <p className='profile form-control'>Salary Range</p>
        </div>

        <div className='container1-flex-item'>
          <span className=''></span>
          <p className='profile'></p>
        </div>

      </div>

      <div className='flex-container1'>
        <div className='container1-flex-item'>
          <button className='btn btn-primary'>Edit Profile</button>
        </div>
      </div>

    </div>
  )
}
