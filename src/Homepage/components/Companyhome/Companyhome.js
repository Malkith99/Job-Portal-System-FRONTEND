import { height } from '@mui/system'
import React from 'react'
import "../Companyhome/Companyhome.css"

function Companyhome() {
  return (
    <div className="add-jobs">
        
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className="col">
                        
                        <div >
                            <a href='addVac'>
                                <button type="Submit" class="re text-white" style={{height:"300px",backgroundColor:"rgb(38, 56, 95)",fontSize:"40px"}}>Add a Vacancy</button>
                            </a>
                        </div>
                    </div>
                    {/*column2*/}
                    <div className="col">
                    
                    <div className="">
                        <div >
                            <a href='response'>
                                
                                <button type="Submit" class="re text-white" style={{height:"300px",backgroundColor:"#2B547E",fontSize:"40px"}}>Responses</button>
                            </a>
                        </div>
                       
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Companyhome