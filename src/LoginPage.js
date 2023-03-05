import Login from './components/Login';
import Footer from './components/footer';
import Headertop from './components/headertop';
import Title from './components/title';
import Headerbottom from './components/headerbottom';

import React, { Component } from 'react'

export default class LoginPage extends Component {
    render() {
        return (
            <div className="page-container">

                <Headertop />
                <Title />
                <Headerbottom />

                <div className="content-wrap">

                </div>
                <div>
                    <Login />

                </div>
                <Footer />
            </div>
        )
    }
}
