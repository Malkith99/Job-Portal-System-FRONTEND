import React, { useState, useEffect } from "react";
function FlyerPopup(props) {
    const [file, setFile] = useState( "https://png2.cleanpng.com/sh/bd00f43347e646f0e4b5ec81464f300b/L0KzQYm3VcEzN6N4fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfJzd5RtjeRuLXbvibb5TgBieJZ3RadqZka7SIq3gsY3PmI5Rqc7OES0Q4aBUcUzPmI1TqQANke3R4K1kP5o/kisspng-computer-icons-brochure-flyer-paper-5af68890b66614.5284135815261062567471.png"
    );

    function handleSave() {
       
    }

    function handleFileChange(e) {const selectedFile = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result;
            setFile(base64String);
        };

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }}

    return (
        <div className="container1-flex-item1 text-center" style={{ maxWidth: "500px", maxHeight: "600px" }}>
            <img className="profile-photo-3" style={{minWidth:"300px"}}src={file} alt="Flyer Image" />
           
            <div className="file-input-div">
            <label for="flyer" className="label-title">
                
                Job Vacancy Flyer
                </label>
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

export default FlyerPopup;
