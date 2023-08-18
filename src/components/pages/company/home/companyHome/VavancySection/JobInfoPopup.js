import React, {useState} from "react";
export default function JobInfo(props) {
    function handleSave(event){};
return(
    <div className="container1-flex-item1 text-center" style={{minWidth:"400px"}}>
    <div className="flex-container1">
    {/* <div className="flex-container2"> */}
    <div className="container1-flex-item ">
      <label for="jobDescription" className="">
       
        Job Description
      </label>
      <div className="input-filed input-filed-cls">
        <textarea
          type="text"
          className="form-control"
          style={{ height: "100px" }}
          id="jobDescription"
          placeholder="Job Description"
       
          // required
        ></textarea>
        {/* </div> */}
      </div>

      <label for="skills" className="">
        
        Skills and Experiences Required
      </label>
      <div className="input-filed input-filed-cls">
        <textarea
          type="text"
          className="form-control"
          style={{ height: "80px" }}
          id="skills"
          placeholder="Skills"
    
          // required
        ></textarea>
      </div>
    </div>
   
        </div>
        <div style={{ marginBottom: "1rem" }}></div>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
            </button>
        </div>
);
}