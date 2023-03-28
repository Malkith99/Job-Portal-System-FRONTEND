import React,{useState,useEffect} from 'react';  //useEffect import fro reac hook and used in function based approach
import axios from "axios";



export default function AllStudents(){

    const [students, setStudents] = useState([]);  // setStudents used for updating the student variable
                                                    // use "[]" beacause student is an array
    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:1234/student/").then((res)=>{
                //console.log(res);
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();        // function calling
    },[])                     // find more about useEffect?????
    
    
    return(
        <div className="container">
            
            <h1>All Students</h1>
            {students.map((studentData)=>(
                <div>
                 <p>Name:{studentData.name}</p> 
                 <p>Age:{studentData.age}</p> 
                 <p>Gender:{studentData.gender}</p> 
                 </div>
            ))}
        </div>
    )
}