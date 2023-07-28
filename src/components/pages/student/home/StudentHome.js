import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../../../mainHeader/mainHeader';
import Footer from '../../../footer/footer';
import './StudentHome.css';
import stripImage from '../../../../images/im3.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import Card from "../../student/home/studentHome/Feed";

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
                <div class="strip-section">
                    <div class="centered-content">
                        <h2 class="section-title text-style">
                            Find the Job  that is perfect for you
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
                    <div class="right-column">
                        <img src={stripImage} alt="Strip" class="strip-image" />
                    </div>
                </div>
                <div className="feeds-section" style={{height:"auto",padding:"25px",marginTop:"100px"}}>

                    <Card/>
                </div>
                <div className="paragraphs-section">
                </div>
            </div>
            <Footer />
        </div>
    );
}
