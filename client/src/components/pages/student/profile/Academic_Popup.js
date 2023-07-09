import React from "react";
export default function AcademicDetails(){
    return(
       
        <div className="">
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Faculty<span className="asterisk-mark">*</span>
                </label>
              </div>
              
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <select className="form-select" name="faculty" id="faculty">
                    <option selected disabled>
                      Select your Faculty
                    </option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Allied Health Science">
                      Allied Health Science
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Fisheries and Marine Sciences & Technology">
                      Fisheries and Marine Sciences & Technology
                    </option>
                    <option value="Graduate Studies">Graduate Studies</option>
                    <option value="Humanities and Social Sciences">
                      Humanities and Social Sciences
                    </option>
                    <option value="Management & Finance">
                      Management & Finance
                    </option>
                    <option value="Medicine">Medicine</option>
                    <option value="Science">Science</option>
                    <option value="Technology">Technology</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Date of Graduating<span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Graduating Year"
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Field<span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <select className="form-select" name="field" id="field">
                    <option selected disabled>
                      Select Your Field
                    </option>
                    <option value="Field1">Electrical Engineer</option>
                    <option value="Field2">Civil Engineer</option>
                    <option value="Field3">Software Engineer</option>
                    <option value="Field4">Accounting</option>
                    <option value="Field4">Doctor</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container2-flex-item"></div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Sub Speciality<span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <select
                    className="form-select"
                    name="subSpeciality"
                    id="subSpeciality"
                  >
                    <option selected disabled>
                      Select your Sub Speciality
                    </option>
                    <option value="SubSpeciality1">Sub Speciality 1</option>
                    <option value="SubSpeciality2">Sub Speciality 2</option>
                    <option value="SubSpeciality3">Sub Speciality 3</option>
                    <option value="SubSpeciality4">Sub Speciality 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container2-flex-item"></div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item3">
                <label className="label-title">Projects</label>
              </div>
              <div className="container2-flex-item-sub-item4">
                <div className="input-filed input-filed-cls">
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }}></div>
      <button type="Submit" class="btn btn-primary">
        Save
      </button>
    </div>

    )
}