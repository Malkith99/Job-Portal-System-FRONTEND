import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';
import { useNavigate } from 'react-router-dom';

export default function Feed() {
    const navigate = useNavigate();
    const [jobpool, setJobpool] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchJobVacancies = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/vacancies');
                setJobpool(response.data);
            } catch (error) {
                console.error('Failed to fetch job vacancies:', error);
            }
        };

        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/vacancies');
                setCompanies(response.data);
            } catch (error) {
                console.error('Failed to fetch companies:', error);
            }
        };

        fetchJobVacancies().then(() => {});
        fetchCompanies().then(() => {});
    }, []);

    return (
        <div className='wrapper'>
            {jobpool.map((vacancy) => {
                const { _id } = vacancy;
                const items = vacancy.items;

                return (
                    <React.Fragment key={_id}>
                        {items.map((item, index) => {
                            const { jobPosition, salary,dueDate, flyer, companyId } = item;

                            // Find the corresponding company
                            const company = companies.find((c) => c._id === companyId);

                            return (
                                <div key={`${_id}-${index}`} className='card'>
                                    <div className='imagestyle'>
                                        <img alt="Card Image" src={`data:image/jpeg;base64/${flyer}`} />
                                    </div>
                                    <h3 className={`card_title ${jobPosition.length > 25 ? 'card_title--small' : ''}`}>
                                        {jobPosition}
                                    </h3>
                                    <p className="salary">Salary: {salary}</p>
                                    <p className="due-date">Due Date: {dueDate}</p>
                                    {company && <p className="company-name">Company: {company.firstName}</p>}
                                    <div className='button-section'>
                                        <button className='button-section' onClick={() => {
                                                navigate(`/company-vacancy-view-student/${item._id}`);
                                            }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
}