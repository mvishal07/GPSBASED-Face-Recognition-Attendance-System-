import React, { useState } from 'react';
import Header from '../Header';

function AdminRegistration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // Send request to the backend
        const response = await fetch('http://localhost:5000/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <>
        <Header/>
        <div>
            <h2>Admin Registration</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label className='labels'>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='labels'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
        </>
       
    );
}

export default AdminRegistration;
