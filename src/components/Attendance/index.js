import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import Header from '../Header';

function Attendance() {
    const [studentId, setStudentId] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errmsg,setError] = useState('')

    const getLocationAndSubmit = async (event) => {
        event.preventDefault();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);

                try {
                    const response = await fetch('http://localhost:5000/attendance', {  
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            student_id: studentId,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        }),
                    });

                    const result = await response.json();
                    setError(result.message);
                } catch (error) {
                    console.error("Error marking attendance:", error);
                    setError("Error marking attendance.");
                }
            }, (error) => {
                setError('Error getting location: ' + error.message);
            }, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    return (
        <>
        <Header/>
        <div className="attendance-container">
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1729085943~exp=1729089543~hmac=5ad5a47bfef9c44283275c1e50408d2327dd4a501f2e9ea0d005ab6384e04c9c&w=740" alt="img" className='att-img'/>
           <div>
           
            <form className="attendance-form" onSubmit={getLocationAndSubmit}>
            <h1 className="attendance-title">Mark Attendance</h1>
                <label  className='labels'   >Student ID</label>
                <input 
                    type="text" 
                    className='pass-input'
                    value={studentId} 
                    onChange={(e) => setStudentId(e.target.value)} 
                    required 
                />
                <button type="submit" className="attendance-button">Mark Attendance</button>
                <br/>
                <p className='error-msg'>{errmsg}</p>
            </form>
            </div>

        </div>
        </>
        
    );
}

export default Attendance;
