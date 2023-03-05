import React, { Component } from 'react';
import StudentRegistrationUserDetails from '../StudentRegistrationUserDetails';
import Footer from '../footer';
import Headertop from '../headertop';
import Title from '../title';
import Headerbottom from '../headerbottom';

export default class StudentRegistrationUserDetailsPage extends Component {
    render() {
        return (
            <div>
                <div className="page-container">
                    <Headertop />
                    <Title />
                    <Headerbottom />
                    <div className="content-wrap">
                    </div>
                    <div>
                        <StudentRegistrationUserDetails />
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }
}



