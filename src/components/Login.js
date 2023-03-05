import "./login.css";
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="loginbox">
                <div className="lcontainer">
                    <div className="row">
                        {/*column1*/}
                        <div className="col">
                            <p className="loginN">Log In :</p>
                            <div className="inputbox">

                                <form>
                                    <div class="mb-3">
                                        <label for="Username" class="form-label">User Name</label>
                                        <input type="UserName" class="form-control" id="Username" aria-describedby="UserNameHelp" placeholder="Enter Username"></input>
                                        <div id="UserNameHelp" class="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter the Password"></input>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" ></input>
                                        <label class="form-check-label" for="exampleCheck1">Remember username</label>
                                    </div>
                                    <button type="Log In" class="btn btn-primary">LOG IN</button>
                                </form>

                            </div>
                        </div>
                        {/*column2*/}
                        <div className="col">
                            <p className="loginN">Register :</p>
                            <div className="student">
                                <Link to="/registerStudent">
                                    <button type="submit" className="s text-white">
                                        Register as a Student
                                    </button>
                                </Link>
                            </div>
                            <div className="lecturer">
                                <button type="Submit" class="l text-white">Register as a Lecturer</button>
                            </div>
                            <div className="company">
                                <button type="Submit" class="l text-white">Register as a Company </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}