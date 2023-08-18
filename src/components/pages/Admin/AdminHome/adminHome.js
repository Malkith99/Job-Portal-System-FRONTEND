import React, {useEffect, useState} from 'react';
import MainHeader from '../../../mainHeader/mainHeader';
import Footer from '../../../footer/footer';
import './adminHome.css'; // Import the CSS file
import adminImage from '../../../../images/admin.png';
import {URL} from "../../../../env";
import {Link} from "react-router-dom";
import {BarChart ,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
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

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`${URL}/api/users/${userId}`, {
                method: 'DELETE',
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message); // Log success message from the server
                toast.success(`User  has been successfully deleted.`);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error(`Error deleting user: ${error.message}`);
        }

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
        handleDelete(userToDelete).then(r => {});
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
                <h2 className='title-box' style={{color:"#434343"}}>User Graph</h2>
                {chartData.labels && chartData.datasets ? (
                    <BarChart width={600} height={300} data={chartData.labels}> {/* Use chartData.labels as the data */}
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {chartData.datasets.map((dataset, index) => (
                            <Bar
                                key={index}
                                dataKey="value" // Make sure this is "value" as it represents the count
                                data={dataset.data}
                                fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color for each bar
                            />
                        ))}
                    </BarChart>
                ) : (
                    <p>No data available for the graph</p>
                )}
                 <div className="btn btn-primary" style={{ display:"",marginTop:"2%" }}>
                <Link
                    to="/studentDetails"
                    style={{
                        // Adjust display property to match CSS version
                    }}
                >
                    <button style={{background:"none",border:"none",color:"white",alignItems:"center"}}>Student Detail Page</button>
                </Link>
            </div>
            </div>

            <h2 className="title-box" style={{ display: 'flex', justifyContent: 'center', color:"#434343",marginTop:"2%" }}>
                User List
            </h2>
            <div className="admin-home-container container" style={{ justifyContent:"center" }}>
                {/* Apply a container class

                <div style={{ display: 'flex', flex: '25%', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={adminImage} className="image" alt="adminImage" />
                </div>
*/}
                <div style={{ display:"flex", justifyContent: 'center',flexDirection:"column"}}>
                    <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center',flexDirection:"row", marginBottom:"1%" ,justifyItems:""}}>
                        <button
                            onClick={() => handleRoleFilter('')}
                            className={selectedRole === '' ? 'active' : ''}
                            style={{ marginRight: '1%', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleRoleFilter('admin')}
                            className={selectedRole === 'admin' ? 'active' : ''}
                            style={{ marginRight: '1%', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Admin
                        </button>
                        <button
                            onClick={() => handleRoleFilter('company')}
                            className={selectedRole === 'company' ? 'active' : ''}
                            style={{ marginRight: '1%', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Company
                        </button>
                        <button
                            onClick={() => handleRoleFilter('student')}
                            className={selectedRole === 'student' ? 'active' : ''}
                            style={{ marginRight: '1%', width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
                        >
                            Student
                        </button>
                        <button
                            onClick={() => handleRoleFilter('lecturer')}
                            className={selectedRole === 'lecturer' ? 'active' : ''}
                            style={{  width: '20%', height: '40px', background: '#000066', borderColor: '#000066', fontSize: '20px', color: '#f2f2f2' }}
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
                                        {/*
                                        <button onClick={() => handleEdit(user._id)}>Edit</button>*/}
                                        <button  style={{background:"none",color:"red",border:"none"}} onClick={() => handleDeleteButtonClick(user._id)}>Delete</button>
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
