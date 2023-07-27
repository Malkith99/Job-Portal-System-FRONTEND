import React, {useEffect, useState} from 'react';
import MainHeader from '../../../mainHeader/mainHeader';
import Footer from '../../../footer/footer';
import './adminHome.css'; // Import the CSS file
import adminImage from '../../../../images/admin.png';
//import {Bar} from 'recharts';
import {URL} from "../../../../env";
import {Link} from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Alert, DialogActions, DialogContentText} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import {Button} from "react-bootstrap";
import DialogTitle from "@mui/material/DialogTitle";
import {toast} from "react-toastify";
function AdminHome() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');
    const [chartData, setChartData] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        fetchUsers().then(() => {

        });
        handleRoleFilter('');
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(URL +'/api/users');
            const data = await response.json();

            if (response.ok) {
                setUsers(data.users);
                setFilteredUsers(data.users); // Set filteredUsers to all users
                createChartData(data.users);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error(`Error retrieving users: ${error.message}`);
        }
    };

    const handleRoleFilter = (role) => {
        setSelectedRole(role);
        if (role === '') {
            setFilteredUsers(users); // Set filteredUsers to all users
            createChartData(users); // Generate chart data for all users
        } else {
            const filtered = users.filter((user) => user.role === role);
            setFilteredUsers(filtered);
            createChartData(filtered); // Generate chart data for filtered users
        }
    };



    const handleEdit = (userId) => {
        // Implement the edit functionality
        console.log(`Edit user with ID: ${userId}`);
    };

    const [userToDelete, setUserToDelete] = useState(null);

    const handleDelete = (userId) => {
        // Here, you can perform the actual delete logic, e.g., make an API call, etc.
        // For this example, we will just log the user ID to the console.
        console.log("Delete user with ID:", userId);

        // Hide the alert after handling the delete action.
        setShowAlert(false);
    };

    const handleDeleteButtonClick = (userId) => {
        setUserToDelete(userId);
        setShowAlert(true);
        toast.info("Alert! If user deleted That action can't be undone");
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleConfirmDelete = () => {
        handleDelete(userToDelete);
    };

    // Count the number of users for each role
    const countUsersByRole = (role) => {
        return filteredUsers.reduce((count, user) => {
            if (user.role === role) {
                return count + 1;
            }
            return count;
        }, 0);
    };





    // Generate data for the chart based on filtered users
    const createChartData = (usersData) => {
        const roles = ['admin', 'company', 'student', 'lecturer']; // Define the roles

        const data = roles.map((role) => {
            return { name: role, value: usersData.filter((user) => user.role === role).length };
        });

        setChartData({
            labels: roles,
            datasets: [
                {
                    label: 'User Role',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the background color
                },
            ],
        });
    };




    return (
        <>
            <MainHeader />

            {/*Note*/}
            {/*don't change graph*/}



            <div className="graph-container" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2>User Graph</h2>
                {chartData.labels && chartData.datasets ? (
                    <BarChart width={600} height={300} data={chartData.datasets} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {chartData.datasets.map((dataset, index) => (
                            <Bar
                                key={index}
                                dataKey="value"
                                data={dataset.data}
                                fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color for each bar
                            />
                        ))}
                    </BarChart>
                ) : (
                    <p>No data available for the graph</p>
                )}
            </div>






            <div style={{ textAlign: 'center' }}>
                <Link
                    to="/studentDetails"
                    style={{
                        background: '#004d99',
                        borderRadius: 3,
                        border: 0,
                        color: 'white',
                        height: 48,
                        padding: '0 30px',
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
                        transition: 'transform 0.2s ease-in-out',
                        textDecoration: 'none', // Remove underline from the link
                        display: 'inline-block', // Adjust display property to match CSS version
                    }}
                >
                    Student Detail Page
                </Link>
            </div>


            <h1 className="sign" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '45px', color: '#004d99' }}>
                <u>User List</u>
            </h1>
            <div className="admin-home-container container" style={{ display: 'flex' }}>
                {/* Apply a container class

                <div style={{ display: 'flex', flex: '25%', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={adminImage} className="image" alt="adminImage" />
                </div>
*/}
                <div style={{ flex: '75%', justifyContent: 'center', marginLeft: '10%', marginTop: '6%' }}>
                    <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
                        <button
                            onClick={() => handleRoleFilter('')}
                            className={selectedRole === '' ? 'active' : ''}
                            style={{ marginRight: '5px', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleRoleFilter('admin')}
                            className={selectedRole === 'admin' ? 'active' : ''}
                            style={{ marginRight: '5px', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Admin
                        </button>
                        <button
                            onClick={() => handleRoleFilter('company')}
                            className={selectedRole === 'company' ? 'active' : ''}
                            style={{ marginRight: '5px', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Company
                        </button>
                        <button
                            onClick={() => handleRoleFilter('student')}
                            className={selectedRole === 'student' ? 'active' : ''}
                            style={{ marginRight: '5px', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Student
                        </button>
                        <button
                            onClick={() => handleRoleFilter('lecturer')}
                            className={selectedRole === 'lecturer' ? 'active' : ''}
                            style={{ marginRight: '5px', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Lecturer
                        </button>
                    </div>
                    {/* Alert container */}
                    {showAlert && (
                        <div style={{ margin: "10px", padding: "10px", background: "yellow" }}>
                            <Alert variant="filled" severity="warning">
                                This is a warning alert — check it out!
                            </Alert>
                        </div>
                    )}

                    {selectedRole && (
                        <h2 style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                            Showing {countUsersByRole(selectedRole)} {selectedRole} users
                        </h2>
                    )}
                    {filteredUsers.length > 0 ? (
                        <table className="user-table">
                            {/* Apply a class to the table */}
                            <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Signup Date</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user._id}>
                                    <td>
                                        <img src={user.profilePhoto} alt={user.name} className="user-photo" />
                                    </td>
                                    <td>{user.firstName + " "+ user.lastName}</td>
                                    <td>{user.signupDate}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user._id)}>Edit</button>
                                        <button onClick={() => handleDeleteButtonClick(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p style={{ display: 'flex', justifyContent: 'center', margin: '10px', fontSize: '20px' }}>No users found</p>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <Dialog open={showAlert} onClose={handleCloseAlert}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAlert} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>



            <Footer />
        </>
    );
}

export default AdminHome;
