import React, { useEffect, useState } from 'react';
import MainHeader from "../../../mainHeader/mainHeader";
import Footer from "../../../footer/footer";
import "./adminHome.css"; // Import the CSS file
import adminImage from "../../../../images/admin.png"

function AdminHome() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        fetchUsers().then(() => {});
        handleRoleFilter('');
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users');
            const data = await response.json();

            if (response.ok) {
                setUsers(data.users);
                setFilteredUsers(data.users); // Set filteredUsers to all users
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
        } else {
            const filtered = users.filter((user) => user.role === role);
            setFilteredUsers(filtered);
        }
    };

    const handleEdit = (userId) => {
        // Implement the edit functionality
        console.log(`Edit user with ID: ${userId}`);
    };

    const handleDelete = (userId) => {
        // Implement the delete functionality
        console.log(`Delete user with ID: ${userId}`);
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



    return (
        <>
            <MainHeader/>
            <h1 className='sign' style={{display:"flex",justifyContent:"center",marginBottom:"50px",fontSize:"45px",color:"#004d99"}}><u>User List</u></h1>
            <div className="admin-home-container container"
            style={{display:"flex"}}> {/* Apply a container class */}
                
                <div style={{display:"flex",flex:"25%",justifyContent:"center",alignItems:"center"}}>
                <img
                        src={adminImage}
                        className="image"
                        alt="adminImage"
                        
                        
                        />
                </div>
                

                <div style={{flex:"75%",justifyContent:"center",marginLeft:"10%",marginTop:"6%"}}>
                    <div className="filter-buttons" style={{display:"flex",justifyContent:"center",padding:"5px"}}>
                        <button
                            onClick={() => handleRoleFilter('')}
                            className={selectedRole === '' ? 'active' : ''}
                            style={{marginRight:"5px",width:"20%",height:"40px",background:"#000066",borderColor:"#000066",fontSize:"20px",color:"#f2f2f2"}}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleRoleFilter('admin')}
                            className={selectedRole === 'admin' ? 'active' : ''}
                            style={{marginRight:"5px",width:"20%",height:"40px",background:"#000066",borderColor:"#000066",fontSize:"20px",color:"#f2f2f2"}}
                        >
                            Admin
                        </button>
                        <button
                            onClick={() => handleRoleFilter('company')}
                            className={selectedRole === 'company' ? 'active' : ''}
                            style={{marginRight:"5px",width:"20%",height:"40px",background:"#000066",borderColor:"#000066",fontSize:"20px",color:"#f2f2f2"}}
                        >
                            Company
                        </button>
                        <button
                            onClick={() => handleRoleFilter('student')}
                            className={selectedRole === 'student' ? 'active' : ''}
                            style={{marginRight:"5px",width:"20%",height:"40px",background:"#000066",borderColor:"#000066",fontSize:"20px",color:"#f2f2f2"}}
                        >
                            Student
                        </button>
                        <button
                            onClick={() => handleRoleFilter('lecturer')}
                            className={selectedRole === 'lecturer' ? 'active' : ''}
                            style={{marginRight:"5px",width:"20%",height:"40px",background:"#000066",borderColor:"#000066",fontSize:"20px",color:"#f2f2f2"}}
                        >
                            Lecturer
                        </button>
                    </div>
                    {selectedRole && (
                        <h2 style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                            Showing {countUsersByRole(selectedRole)} {selectedRole} users
                        </h2>
                    )}
                {filteredUsers.length > 0 ? (
                    <table className="user-table"> {/* Apply a class to the table */}
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user._id}>
                                <td>
                                    <img src={user.profilePhoto} alt={user.name} className="user-photo" /> {/* Apply a class to the user photo */}
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleEdit(user._id)}>Edit</button>
                                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={{display:"flex",justifyContent:"center",margin:"10px",fontSize:"20px"}}>No users found</p>
                )}
                    
                </div>




            </div>
            <Footer />
        </>
    );
}

export default AdminHome;
