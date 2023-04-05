import React,{useState} from "react";

function LecturerRegister() {

  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div
      className="container"
      style={{ marginTop: "75px", marginBottom: "50px" }}
    >
      <div>
        <form action="/lecture/home">

        <div className="flex-container1">
            <div className="container1-flex-item">
              
            <div
              className="container1-flex-item1 "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img className="profile-photo-2" src={file} alt="Profile Photo" />
              <label for="profilePhoto"className="">
                <span  className="asterisk-mark">*</span> Profile Photo</label>
              <div className="file-in">
                <input
                  type="file"
                  class=" form-control"
                  style={{}}
                  onChange={handleChange}
                />
              </div>
            </div>

            </div>
          </div>

          <div className="flex-container1">
            <div className="container1-flex-item">
              <label for="firstName" className="">
                <span className="asterisk-mark">*</span>First Name
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  // required
                ></input>
              </div>
              <label for="universityEmail" className="">
                <span className="asterisk-mark">*</span>University Email Address
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="universityEmail"
                  placeholder="University  Email Address"
                  // required
                ></input>
              </div>
              <div className="input-filed input-filed-cls">
                <label for="inputPassword" className="">
                  <span className="asterisk-mark">*</span>Enter a Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Enter a Password"
                ></input>
              </div>
            </div>
            <div className="container1-flex-item">
              <label for="middleName" className="">
                <span className="asterisk-mark">*</span>Middle Name
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="tel"
                  className="form-control"
                  id="middleName"
                  placeholder="Middle Name"
                  // required
                ></input>
              </div>
              <label for="contactNumber" className="">
                <span className="asterisk-mark">*</span>Contact Number
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Contact Number"
                  // required
                ></input>
              </div>
              <div className="input-filed input-filed-cls">
                <label for="confirmPassword" className="">
                  <span className="asterisk-mark">*</span>Confirm the Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Confirm the Password"
                ></input>
              </div>
            </div>
            <div className="container1-flex-item">
              <label for="position" className="">
                <span className="asterisk-mark">*</span>Position
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  placeholder="Position"
                  // required
                ></input>
              </div>
              <label for="other" className="">
                <span className="asterisk-mark">*</span>Other
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="other"
                  placeholder="Other"
                  // required
                ></input>
              </div>
            </div>
          </div>
          <div className="">
            <div className="input-filed input-filed-cls">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <p></p>
    </div>
  );
}
export default LecturerRegister;
