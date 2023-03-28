import Login from './components/Login';
import Footer from './components/footer';
import Headertop from './components/headertop';
import Title from './components/title';
import Headerbottom from './components/headerbottom';
import MainHeader from './components/MainHeader/MainHeader';
import {Link} from 'react-router-dom'


import React, { Component } from 'react'

export default function LoginPage({isLogedIn, onLogout}) {
    const content = <><Link to="/">Login</Link></>;
    return (
        <div className="page-container">
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>

            <div className="content-wrap">

            </div>
            <div>
                <Login />

            </div>
            <Footer />
        </div>
    )
}