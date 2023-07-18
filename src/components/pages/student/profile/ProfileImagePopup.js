import React, { useState, useEffect } from "react";
import {toast} from "react-toastify";

function ProfilePic(props) {
    const [file, setFile] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            const profilePhoto = parsedUser.profilePhoto;
            setFile(profilePhoto);
        }
    }, []);

    function handleSave() {
        props.sendData(file);
        //alert("Save successful. Please close the window manually.");
        toast.info("Save successful. Please close the window manually.");
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
