import React,{useState} from "react";
export default function AddStudent(){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name"></input>
                  { /*<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>

                <div className="form-group">
                    <label for="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"></input>
                </div>

                <div className="form-group">
                    <label for="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"></input>
                </div>
            
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}