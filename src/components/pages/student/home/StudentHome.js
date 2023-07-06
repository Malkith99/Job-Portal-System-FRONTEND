import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MainHeader from '../../../mainHeader/mainHeader';
import Footer from '../../../footer/footer';
import Feeds from './studentHome/feeds';
import './StudentHome.css';
import stripImage from '../../../../images/im3.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import Card from "../../student/home/studentHome/feed2";
import feed2 from '../../student/home/studentHome/feed2';
export default function StudentHome({ isLogedIn, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const content = (
    <>
      <Link to="/student-profile">Profile</Link>
      <Link to="/student-applications">My Applications</Link>
    </>
  );
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, []);
  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div className="page">
        <div className="strip-section">
         
          <div className="strip-content">
            <h2 className="section-title text-style">
              Find the Job <br /> that is perfect for you
            </h2>
          </div>
          <div className="searchBar">
            <TextField
              id="search"
              label="Search Company Name"
              variant="outlined"
              size="small"
              style={{marginLeft:150,marginTop:50}}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton color="inherit">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
          <img src={stripImage} alt="Strip" className="strip-image" />
        </div>
        <div className="feeds-section" style={{height:"auto",padding:"25px"}}>
          
          <Card/>
        </div>
        <div className="paragraphs-section">
          {/* <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

  
        
/* /*         <div>            
            <h1>Student Home</h1>
            <div className="student">
              <Link to="/student-profile">
                <Button variant="contained">
                  profile
                </Button>
              </Link>
              <Link to="/student-application">
                <Button variant="contained">
                  My Applications
                </Button>
              </Link>
            </div>
        </div> */ 