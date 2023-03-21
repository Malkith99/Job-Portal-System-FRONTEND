import React, { Component } from 'react';
import StudentRegistrationBasic from '../StudentRegistrationBasic';
import Footer from '../footer';
import Headertop from '../headertop';
import Title from '../title';
import Headerbottom from '../../studentregister/StudentNav';

export default class StudentRegistrationBasicPage extends Component {
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
                        <StudentRegistrationBasic />
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }
}
