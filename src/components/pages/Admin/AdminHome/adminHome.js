import React, { useEffect, useState } from 'react';
import MainHeader from "../../../mainHeader/mainHeader";
import Footer from "../../../footer/footer";
import "./adminHome.css"; // Import the CSS file

function AdminHome() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        fetchUsers().then(() => {});
        handleRoleFilter(''); // Set the initial filter to empty string ('') to show all users
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

    return (
        <>
            <MainHeader/>
            <div className="admin-home-container"> {/* Apply a container class */}
                <h1>User List</h1>
                <div className="filter-buttons">
                    <button
                        onClick={() => handleRoleFilter('')}
                        className={selectedRole === '' ? 'active' : ''}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleRoleFilter('admin')}
                        className={selectedRole === 'admin' ? 'active' : ''}
                    >
                        Admin
                    </button>
                    <button
                        onClick={() => handleRoleFilter('company')}
                        className={selectedRole === 'company' ? 'active' : ''}
                    >
                        Company
                    </button>
                    <button
                        onClick={() => handleRoleFilter('student')}
                        className={selectedRole === 'student' ? 'active' : ''}
                    >
                        Student
                    </button>
                    <button
                        onClick={() => handleRoleFilter('lecturer')}
                        className={selectedRole === 'lecturer' ? 'active' : ''}
                    >
                        Lecturer
                    </button>
                </div>

                {selectedRole && <h2>Showing {selectedRole} users</h2>}
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
                    <p>No users found</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default AdminHome;
