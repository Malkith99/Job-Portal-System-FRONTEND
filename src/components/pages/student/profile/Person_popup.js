import React, {useState} from "react";

export default function PersonalInfo(props) {
  const {indexNumber } = props;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  const [firstName, setFName] = useState(""||user.firstName)
  const [middleName, setMName] = useState(""||user.middleName);
  const [lastName, setLName] = useState(""||user.lastName);
  function handleSave(event) {
    const data2 = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName
    };
    console.log(data2);
    props.sendData(JSON.stringify(data2));
    alert("Save successful. Please close the window manually.");
  }


  return (
      <div className="container1-flex-item2">
        <div className="sub-flex-container">
          <div className="sub-flex-item1">
            <label className="label-title">Name</label>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(event) => setFName(event.target.value)}
              ></input>
            </div>
            <div className="text-center">
              <label className="hint-title">
                First Name<span className="asterisk-mark">*</span>
              </label>
            </div>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(event) => setMName(event.target.value)}
              ></input>
            </div>
            <div className="text-center">
              <label className="hint-title">Middle Name</label>
            </div>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(event) => setLName(event.target.value)}
              ></input>
            </div>
            <div className="text-center">
              <label className="hint-title">
                Last Name<span className="asterisk-mark">*</span>
              </label>
            </div>
          </div>
        </div>
        <div className="sub-flex-container">
          <div className="sub-flex-item1">
            <label className="label-title">
              Index Number<span className="asterisk-mark">*</span>
            </label>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Index Number"
                  required
                  value={indexNumber}
              ></input>
            </div>
          </div>
          <div className="sub-flex-item2"></div>
          <div className="sub-flex-item2"></div>
        </div>
        <div className="sub-flex-container">
          <div className="sub-flex-item1">
            <label className="label-title">
              Date of Birth<span className="asterisk-mark">*</span>
            </label>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="date"
                  className="form-control"
                  placeholder="DOB"
                  required
              ></input>
            </div>
          </div>
          <div className="sub-flex-item2"></div>
          <div className="sub-flex-item2"></div>
        </div>
        <div className="sub-flex-container">
          <div className="sub-flex-item1">
            <label className="label-title">
              Gender<span className="asterisk-mark">*</span>
            </label>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <select className="form-select" name="gender" id="gender">
                <option selected disabled>
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="sub-flex-item2"></div>
          <div className="sub-flex-item2"></div>
        </div>
        <div className="sub-flex-container">
          <div className="sub-flex-item1">
            <label className="label-title">
              Phone Number<span className="asterisk-mark">*</span>
            </label>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number 1"
                  required
              ></input>
            </div>
            <div className="text-center">
              <label className="hint-title">
                Phone Number 1<span className="asterisk-mark">*</span>
              </label>
            </div>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number 2"
                  required
              ></input>
            </div>
            <div className="text-center">
              <label className="hint-title">
                Phone Number 2<span className="asterisk-mark">*</span>
              </label>
            </div>
          </div>
          <div className="sub-flex-item2"></div>
        </div>
        <div className="sub-flex-container">
          <div className="sub-flex-item1">
            <label className="label-title">
              References<span className="asterisk-mark">*</span>
            </label>
          </div>
          <div className="sub-flex-item2">
            <div className="input-filed-s">
              <input
                  type="text"
                  className="form-control"
                  placeholder="References"
                  required
              ></input>
            </div>
          </div>
          <div className="sub-flex-item2"></div>
          <div className="sub-flex-item2"></div>
        </div>
        <div style={{ marginBottom: "1rem" }}></div>
        <button type="Submit" class="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
  );
}
