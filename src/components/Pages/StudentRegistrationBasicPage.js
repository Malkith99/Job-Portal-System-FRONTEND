import React, { Component } from 'react';
import StudentRegistrationBasic from '../StudentRegistrationBasic';
import Footer from '../footer';
import Headertop from '../headertop';
import Title from '../title';
import Headerbottom from '../../studentregister/StudentNav';
import MainHeader from '../MainHeader/MainHeader';
import {Link} from 'react-router-dom'

export default function StudentRegistrationBasicPage({isLogedIn, onLogout}) {
    const content = <><Link to="/student-register">Student Registration</Link><Link to="/student-register">Step 1</Link></>;
        return (
            <div>
                <div className="page-container">
                    <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
                    <div className="content-wrap">
                    </div>
                    <div>
                        <StudentRegistrationBasic />
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }