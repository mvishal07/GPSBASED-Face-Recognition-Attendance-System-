import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './index.css'
import Header from '../Header';
function StudentLogin() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errmsg,setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/student/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ student_id: studentId, password })
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            navigate('/attendance');  
        } else {
            setError(data.message);
        }
    };

    return (
        <>
        <Header/>
        <div className="stu-container">

            
            <form onSubmit={handleLogin} className='stu-login'>
            
                <div className='login-card1'>
                    <h1 className='app-logo'>GeoFace</h1>
                    <p className='desc'>Welcome to GeoFace | Digital Attendance System. <br/>Login to your account to access</p>
                </div>
                <div>
                    <label className='labels'>Student ID <span className='star'>*</span></label>
                    <input 
                        type="text" 
                        value={studentId} 
                        onChange={(e) => setStudentId(e.target.value)} 
                        className='username-input'
                    />
                </div>
                <div>
                    <label className='labels'>Password <span className='star'>*</span></label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className='pass-input'
                    />
                </div>
                <button type="submit" className='login-btn'>Login</button>
                <br/>
                <p className='error-msg'>{errmsg}</p>
            </form>
            <div className='image-card'>

                <img src="https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1571.jpg?t=st=1729084233~exp=1729087833~hmac=93a684b366e35f08be8472ec277d1482a7f998dd504f5e207c768546a53549f1&w=740" alt="img" className='image-lg'/>
            </div>
        </div>
        </>
        
    );
}

export default StudentLogin;
