import React, { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link as ScrollLink, Element } from 'react-scroll';
import "../Companyhome/Companyhome.css"


function ScrollToTopButton() {
    return (
        <button
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
                position: 'fixed',
                zIndex:'1',
                bottom: '20px',
                right: '20px',
                padding: '10px',
                fontSize: '12px',
                borderRadius: '100%',
                backgroundColor: '#009FE5',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            <ArrowUpwardIcon />
        </button>
    );
}


function Companyhome() {

    const [jobpoolm]=useState([
        {
            title:'Job Vacancy 1:',
            text:'Job Vacancy 1 '
        },
        {
            title:'Job Vacancy 2:',
            text:'Job Vacancy 2 '
        },
        {
            title:'Job Vacancy 3:',
            text:'Job Vacancy 3 '
        },
        {
            title:'Job Vacancy 4:',
            text:'Job Vacancy 4 '
        },
        {
            title:'Job Vacancy 5:',
            text:'Job Vacancy 5 '
        },
        {
            title:'Job Vacancy 6:',
            text:'Job Vacancy 5 '
        }
        
    ])

    const [responses]=useState([
        {
            title:'Response 1:',
            text:'Name of the Applicant 1 ,aslo can add the cv of the each applicant'
        },
        {
            title:'Response 2:',
            text:'Name of the Applicant 2 ,aslo can add the cv of the each applicant'
        },
        {
            title:'Response 3:',
            text:'Name of the Applicant 3 ,aslo can add the cv of the each applicant'
        },
        {
            title:'Response 4:',
            text:'Name of the Applicant 4 ,aslo can add the cv of the each applicant'
        },
        {
            title:'Response 5:',
            text:'Name of the Applicant 5 ,aslo can add the cv of the each applicant'
        },
        {
            title:'Response 6:',
            text:'Name of the Applicant 5 ,aslo can add the cv of the each applicant'
        }
        
    ])

    const [file, setFile] = useState("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg");
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setShowScrollButton(window.pageYOffset > 500);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="add-jobs">
        
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className="col">
                        <div >
                            <ScrollLink to="vacancySection" smooth={true} duration={500}>
                                <button type="Submit" class="re text-white" style={{height:"150px",backgroundColor:"rgb(38, 56, 95)",fontSize:"40px",border:"none"}}>Post a Job</button>
                            </ScrollLink>
                        </div>
                    </div>
                    {/*column2*/}
                    <div className="col">
                    
                    <div className="">
                        <div >
                            <ScrollLink to="responsesSection" smooth={true} duration={500}>
                                <button type="Submit" class="re text-white" style={{height:"150px",backgroundColor:"#2B547E",fontSize:"40px",border:"none"}}>Responses</button>
                            </ScrollLink>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h1 className='loginN'>My Job Pool Section :</h1>
                <div className="" style={{paddingLeft:"100px",paddingRight:"100px",paddingTop:"20px"}}>
                
                <div>
                    <section className='res-sec'>
                        <div className='container'>
                            <div className='jobpoolm responses'>
                                {
                                    jobpoolm.map((response,i) => (
                                        <div key={i} className='response'>
                                        <h3 className="container2-flex-item1" style={{fontSize:"25px"}}>
                                            {response.title}
                                        </h3>
                                        <p className=''>
                                            {response.text}
                                        </p>
                                        <div className='button-div' >
                                            <button className='btn btn-primary butdet'  style={{background:"#2B547E",border:"none"}}>See the Details</button>
                                            <button className='btn btn-primary accept' style={{background:" rgb(48, 112, 80"}} >Edit</button>
                                            <button className='btn btn-primary reject' style={{background:"red"}}>Delete</button>
                                        </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                           
                        </div>
                    </section>
                </div>
                <p ></p>
                </div>

            <Element name="vacancySection">
                <h1 className='loginN'>Vacancy Section :</h1>
                <div className="" style={{paddingLeft:"100px",paddingRight:"100px",paddingTop:"20px"}}>


                <div>
                    <form >
                    <div className="flex-container1">                     
                        
                        <div className="container1-flex-item" style={{fontSize:"25px"}}>
                        <label for="jobPosition" className=""><span className="asterisk-mark">*</span>Job Position</label>
                        <div className="input-filed input-filed-cls">
                            <input type="text" className="form-control" id="jobPosition" placeholder="Job Position" required ></input>
                        </div>
                       
                        <label for="contactNumber" className=""><span className="asterisk-mark">*</span>Contact Number</label>
                        <div className="input-filed input-filed-cls">
                            <input type="tel" className="form-control" id="contactNumber" placeholder="Contact Number" required></input>
                        </div>

                        <label for="background" className=""><span className="asterisk-mark">*</span>Background</label>
                        <div className='input-filed input-filed-cls' style={{flexDirection:"row"}}>
                            <select className='form-select' name='background' id='background'>
                            <option selected disabled>Select the requiring Background</option>
                            <option value="Background1">Electrical Engineer</option>
                            <option value="Background2">Civil Engineer</option>
                            <option value="Background3">Software Engineer</option>
                            <option value="Background4">Accounting</option>
                            <option value="Background4">Doctor</option>
                            </select>
                            
                        </div>
                        <label for="flyer" className=""><span className="asterisk-mark">*</span>Flyer</label>
                            <div className="input-filed input-filed-cls">
                                <input type="file" class=" form-control" onChange={handleChange} />
                            </div>
                        

                        </div>
                        <div className="container1-flex-item" style={{fontSize:"25px"}}>
                            
                        <label for="companyName" className=""><span className="asterisk-mark">*</span>Company Name</label>
                        <div className="input-filed input-filed-cls">
                            <input type="text" className="form-control" id="companyName" placeholder="Company Name" required></input>
                        </div>
                        <label for="salaryRange" className=""><span className="asterisk-mark">*</span>Salary Range</label>
                        <div className="input-filed input-filed-cls" style={{ display: "flex", flex: "row", columnGap: "20px" }}>
                            <input type="number" className="form-control" id="salaryRange salaryRangeMin" placeholder="Min" required style={{ width: "50%" }} min="0"></input>
                            <input type="number" className="form-control" id="salaryRange salaryRangeMax" placeholder="Max" required style={{ width: "50%" }} min="0"></input>
                        </div>
                        
                        <label for="levelOfEducation" className=""><span className="asterisk-mark">*</span>Level of Education</label>
                        <div className='input-filed input-filed-cls' >
                            <select className='form-select' name='levelOfEducation' id='levelOfEducation'>
                            <option selected disabled>Requiring Level of Education</option>
                            <option value="Background1">Associate Degree</option>
                            <option value="Background2">Bachelor</option>
                            <option value="Background3">High School</option>
                            <option value="Background4">Masters</option>
                            <option value="Background4">Other Tertiary Education</option>
                            </select>
                            
                        </div>
                        
                      

                        
                        </div>
                        
                        <div className="container1-flex-item" style={{fontSize:"25px"}}>
                        <label for="companyEmail" className=""><span className="asterisk-mark">*</span>Company Email</label>
                        <div className="input-filed input-filed-cls">
                            <input type="text" className="form-control" id="companyEmail" placeholder="Company Email" required></input>
                        </div>
                        <label for="companyLocation" className=""><span className="asterisk-mark">*</span>Company Location</label>
                        <div className="input-filed input-filed-cls">
                            <input type="text" className="form-control" id="companyLocation" placeholder="Company Location" required></input>
                        </div>
                        <label for="dueDate" className=""><span className="asterisk-mark">*</span>Due Date</label>
                        <div className="input-filed input-filed-cls">
                            <input type="date" className="form-control" placeholder="Due Date" required></input>
                        </div>
                        
                        </div>

                        
                    </div>

                    

                    <div className="flex-container2">
                        <div className="container2-flex-item1" style={{fontSize:"25px"}}>

                        <label for="skills" className=""><span className="asterisk-mark">*</span>Skills</label>
                        <div className="input-filed input-filed-cls">
                            <textarea type="text" className="form-control"  style={{height:"80px"}} id="skills" placeholder="Skills" required></textarea>
                        </div>

                        <label for="jobDescription" className=""><span className="asterisk-mark">*</span>Job Description</label>
                        <div className="input-filed input-filed-cls">
                            <textarea type="text" className="form-control"  style={{height:"100px"}} id="jobDescription" placeholder="Job Description" required></textarea>
                        </div>
                        </div>
                        

                    </div>

                    
                    <div className="">
                        <div className="input-filed input-filed-cls">
                        <button type="submit" className="btn btn-primary">Post a Job</button>
                        </div>
                    </div>
                    </form>
                </div>
                <p ></p>
                </div>
            </Element>

            <Element name="responsesSection">
                <h1 className='loginN'>Responses Section :</h1>
                <div className="" style={{paddingLeft:"100px",paddingRight:"100px",paddingTop:"20px"}}>
                
                <div>
                    <section className='res-sec'>
                        <div className='container'>
                            
                            <div className='responses'>
                                {
                                    responses.map((response,i) => (
                                        <div key={i} className='response'>
                                        <h3 className="container2-flex-item1" style={{fontSize:"25px"}}>
                                            {response.title}
                                        </h3>
                                        <p className=''>
                                            {response.text}
                                        </p>
                                        <div className='container' style={{alignItems:"center"}}>
                                            <button className='btn btn-primary butdet'  style={{background:"#2B547E",border:"none"}}>See the Details</button>
                                            {/* <button className='btn btn-primary accept' style={{background:" rgb(48, 112, 80"}} >Accept</button>
                                            <button className='btn btn-primary reject' style={{background:"red"}}>Reject</button> */}
                                        </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </section>
                </div>
                <p ></p>
                </div>
            </Element>
            {showScrollButton && <ScrollToTopButton />}
        </div>
    )
}

export default Companyhome