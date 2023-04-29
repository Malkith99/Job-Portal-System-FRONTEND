import React, { useState } from "react";

const StudentApplication = (props) => {
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="container">
      <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
        Student Application :
      </h1>
      <form>
        <div className="flex-container1">
          <div className="container1-flex-item">
            <div
              className="container1-flex-item1 "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img className="profile-photo-2" src={file} alt="Profile Photo" />
              <label for="profilePhoto" className="">
                <span className="asterisk-mark">
                  <div className={`${props.disabled && "d-none"}`}>*</div>
                </span>{" "}
                Profile Photo
              </label>
              <div className="file-in">
                <input
                  type="file"
                  className=" form-control"
                  style={{}}
                  onChange={handleChange}
                  disabled={props.disabled}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Full Name
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Name with Initials
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Name with Initials"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Date of Birth
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Age
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Contact Number
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Background
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Background"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Skills
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Skills"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              CV
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="file"
                className="form-control"
                id="cv"
                placeholder="Upload your file"
                onChange={handleChange}
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Linkedin Profile
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Linkedin Profile Link"
                disabled={props.disabled}
                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item"></div>
        </div>

        <div className="flex-container1">
          <div
            className="container1-flex-item"
            style={{ paddingBottom: "30px" }}
          >
            <label className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Reference
            </label>

            <select
              className="form-select"
              name="Reference By"
              id="lecturerReference"
              disabled={props.disabled}
            >
              <option selected disabled>
                Select ythe Lecturer
              </option>
              <option value="Lecture1">Name of the Lecture 1</option>
              <option value="Lecture2">Name of the Lecture 2</option>
              <option value="Lecture3">Name of the Lecture 3</option>
              <option value="Lecture4">Name of the Lecture 4</option>
              <option value="Lecture5">Name of the Lecture 5</option>
              <option value="Lecture6">Name of the Lecture 6</option>
              <option value="Lecture7">Name of the Lecture 7</option>
              <option value="Lecture8">Name of the Lecture 8</option>
              <option value="Lecture9">Name of the Lecture 9</option>
              <option value="Lecture10">Name of the Lecture 10</option>
              <option value="Lecture11">Name of the Lecture 11</option>
              <option value="Lecture12">Name of the Lecture 12</option>
            </select>
          </div>
          <div className="container1-flex-item">
            <label className="">
              <span className="asterisk-mark">
                <div className={`${props.disabled && "d-none"}`}>*</div>
              </span>
              Reference
            </label>

            <select
              className="form-select"
              name="Reference By"
              id="lecturerReference"
              disabled={props.disabled}
            >
              <option selected disabled>
                Select the Lecturer
              </option>
              <option value="Lecture1">Name of the Lecture 1</option>
              <option value="Lecture2">Name of the Lecture 2</option>
              <option value="Lecture3">Name of the Lecture 3</option>
              <option value="Lecture4">Name of the Lecture 4</option>
              <option value="Lecture5">Name of the Lecture 5</option>
              <option value="Lecture6">Name of the Lecture 6</option>
              <option value="Lecture7">Name of the Lecture 7</option>
              <option value="Lecture8">Name of the Lecture 8</option>
              <option value="Lecture9">Name of the Lecture 9</option>
              <option value="Lecture10">Name of the Lecture 10</option>
              <option value="Lecture11">Name of the Lecture 11</option>
              <option value="Lecture12">Name of the Lecture 12</option>
            </select>
          </div>
          <div className="container1-flex-item"></div>
        </div>
      </form>
    </div>
  );
};

export default StudentApplication;
