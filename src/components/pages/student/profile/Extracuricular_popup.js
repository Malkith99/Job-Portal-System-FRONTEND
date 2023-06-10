import React from "react";
export default function ExtraC_popup(){
    return(
<div className="" >
  <div className="flex-container2">
    <div className="container2-flex-item">
      <div className="container2-flex-item-sub-item3">
        <label className="label-title">References</label>
      </div>
      <div className="container2-flex-item-sub-item4">
        <div className="input-filed input-filed-cls">
          <textarea
            class="form-control"
            rows="3"
            // disabled={disabled}
            // value={eActivities}
            // onChange={(e) => {
            //   setEActivities(e.target.value);
            // }}
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <div style={{ marginBottom: "1rem" }}></div>
      <button type="Submit" class="btn btn-primary">
        Save
      </button>
</div>
    )}

