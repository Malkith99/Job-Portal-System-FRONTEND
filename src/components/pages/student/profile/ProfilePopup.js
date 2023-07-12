import React, { useState } from "react";

function ProfilePic(props) {
  const [file, setFile] = useState(
      "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );

  function handleSave() {
    props.sendData(file);
    alert("Save successful. Please close the window manually.");
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setFile(base64String);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  }

  return (
      <div className="container1-flex-item1 text-center">
        <img className="profile-photo" src={file} alt="Profile Photo" />
        <label className="label-title">Profile Photo</label>
        <div className="file-input-div">
          <input
              type="file"
              className="file-input-field form-control"
              onChange={handleFileChange}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}></div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
  );
}

export default ProfilePic;
