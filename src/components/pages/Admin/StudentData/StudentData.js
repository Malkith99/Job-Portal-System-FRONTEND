import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./StudentData.css";

export default function AdminStudent() {
  const [students, setStudents] = useState([]);
  //   const [img, setImg] = useState("");
  //   const [fname, setfName] = useState("");
  //   const [lname, setlName] = useState("");
  //   const [email, setEmail] = useState(0);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:1234/student/")
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);
  useEffect(() => {
    console.log(students);
    console.log("Haii");
  }, [students]);

  return (
    <>
      <h1>Student Data</h1>
      <div>
        {/* {students.map((studentData) => (
        <div>
          <p>Name:{studentData.name}</p>
          <p>Age:{studentData.age}</p>
          <p>Gender:{studentData.gender}</p>
        </div>
        ))} */}

        <table className="cart-table">
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.length>0 ? (
            students.map((studentData) => (
              <tr key={studentData._id}>
                <td>
                  <img
                    src={"http//localhost:1234" + studentData.profileImage}
                    alt=""
                  />
                </td>
                <td>{studentData.firsttName}</td>
                <td>{studentData.lastName}</td>
                <td>{studentData.email}</td>
              </tr>
            ))
            ):(
              <tr>
              <td colSpan="4">No students found</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
