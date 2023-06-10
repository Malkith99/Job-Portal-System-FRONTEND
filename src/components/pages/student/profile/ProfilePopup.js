import React, { useState } from "react";

function ProfilePic(props) {
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //const { setOpenPopup } = props;
  function handleSave() {}

  return (
    <div
      className="container1-flex-item1 text-center"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img className="profile-photo" src={file} alt="Profile Photo" />
      <label className="label-title">Profile Photo</label>
      <div className="file-input-div">
        <input
          type="file"
          class="file-input-field form-control"
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}></div>
      <button type="Submit" class="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
export default ProfilePic;
