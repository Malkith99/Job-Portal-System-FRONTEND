import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfileImage() {
  const [profileImage, setImage] = useState("");
  const [studentData, setData] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  console.log(studentData?._id);

  const handleFileChange = (event) => {
    // Perform any save operations here
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  ////////////////////////////////////

  function handleSubmit(event) {
    event.preventDefault();

    if (profileImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;

        // Make API request to upload the image
        axios
          .post(
            "http://localhost:1234/student/uploadImage/" + studentData?._id,
            { imageData }
          ) // Corrected property name to "imageData"
          .then((response) => {
            console.log(response.data); // Success message
            // Retrieve the uploaded image URL from the response
            const { imageUrl } = response.data;
            setImageUrl(imageUrl);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      reader.readAsDataURL(profileImage);
    }
  }

  ////////////////////////////
  // function handleSubmit(event) {
  //   event.preventDefault(); // prevent defult form submission behaviors, pause the refershing

  //   const formData = new FormData();
  //   formData.append("profileImage", profileImage); //"profileImage" is the name goven to profileImage file
  //   console.log(formData);

  //   axios
  //     .post(
  //       "http://localhost:1234/student/uploadImage/" + studentData?._id,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data", // encrypt the sending data type
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       alert("Update Profile Image Successfully!");
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }

  useEffect(() => {
    const fetchData = async () => {
      const token = await window.localStorage.getItem("token");
      axios
        .post(
          "http://localhost:1234/student/studentData",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.data.status == "ok") {
            setData(res.data.data);
          } else {
            window.alert(res.data.error);
          }
        })
        .catch((error) => console.error("Error: ", error));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <p>Profile Image Upload</p>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <img className="profile-photo" src={imageUrl} alt="" />
              {/* {imageUrl && (
                <img className="profile-photo" src={imageUrl} alt="" />
              )} */}
            </div>
            <input type="file" onChange={handleFileChange} />
            <div>
              <button type="submit">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
