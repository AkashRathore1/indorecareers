import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3001/user/" + "fetch");
                setUsers(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUsers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome to the User Management App</h1>
            <h2>User List</h2>
            <ul>
                <br />
                {users.map(user => (
                    
                    <li key={user._id}>
                        <p><strong>Unique Id :</strong> {user._id}</p>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                        <p><strong>Status:</strong> {user.status}</p>
                        <p><strong>Mobile:</strong> {user.mobile}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        <p><strong>Info:</strong> {new Date(user.info).toLocaleString()}
                        
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}; 

export default DisplayData;
