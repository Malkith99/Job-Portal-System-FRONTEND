import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import MainHeader from "../mainHeader/mainHeader";
import axios from "axios";
import allSignInPageImage from "../../images/im6.jpg";
import "./AllSignin.css";
import { URL } from "../../env";
import { toast } from "react-toastify";
function CompanyLogin() {
    const [loggedIn] = useState(!!localStorage.getItem("token"));
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = URL + "/api/auth";
            const { data: res } = await axios.post(url, data);
            setMsg(res.message);

            localStorage.setItem("token", res.data);
            localStorage.setItem("user", JSON.stringify(res.user));

            // Create admin token if the user is an admin
            if (res.user.email === "admin@gmail.com") {
                localStorage.setItem("adminToken", res.data);
                console.log("Admin has been Log In");
                toast.info("Admin has been Log In");
                window.location = "/grp13/adminHome";
            }
            else if (res.user.role === "student") {
                window.location = "/grp13/student-home";
            }
            else if (res.user.role === "company") {
                window.location = "/grp13/company-home";
            }
            else if (res.user.role === "lecturer") {
                window.location = "/grp13/lecturer-home";
            }
            //check if user has carted
            const user = JSON.parse(localStorage.getItem("user"));
            console.log(user.firstName);
            console.log(data);
            console.log("User has been Log In");
            console.log(`User ${data._id} has been login`);
            setShowPopup(true);

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
            toast.error("Server Down");
        }
    };

    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

return (
    <div className="page-container">
      <MainHeader
        content={
          loggedIn ? (
            <>
              <Link to="/">Welcome, {user.firstName} {user.lastName}!</Link>
            </>
          ) : (
            <Link to="/">Home</Link>
          )
        }
      ></MainHeader>
      <div className="ascontainer">
        <div className="asrow justify-content-center">
          <div className="ascol-md-6">
            <div className="ascard-header text-center loginN">Sign In</div>

            <div className="ascard-body">
              <form className="asloginbox-content" onSubmit={handleSubmit}>
                <div className="asd-flex mb-3">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={allSignInPageImage}
                      alt="Your Image"
                      style={{
                        width: "400px",
                        height: "400px",
                        marginRight: "20px",
                      }}
                    />
                  </div>

                  <div className="asflex-grow-1">
                    <div className="asform-group">
                      <label htmlFor="username" className="form-label">
                        <b style={{ fontSize: "20px" }}>Email:</b>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="form-label"
                        style={{ fontSize: "20px" }}
                      >
                        <b>Password:</b>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                      />
                    </div>
                    {error && <div className="login_error_msg">{error}</div>}
                    {msg && <div className="login_success_msg">{msg}</div>}
                  </div>
                </div>
                <div className="asmb-3 form-check" style={{ marginLeft: "22px" }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="asform-check-label" htmlFor="exampleCheck1">
                    Remember username
                  </label>
                </div>
                <button
                  type="submit"
                  className="asbtn-btn-primary"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Login
                </button>

                <div style={{ marginTop: "7px" }}>
                  <Link to="/home">
                    Don't have an account? Click here to sign up.
                  </Link>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <p style={{ textAlign: "center", color: "#888" }}>
                    Please enable cookies in your browser for a better
                    experience.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {error && <div className="login_error_msg">{error}</div>}
            {msg && <div className="login_success_msg">{msg}</div>}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default CompanyLogin;
