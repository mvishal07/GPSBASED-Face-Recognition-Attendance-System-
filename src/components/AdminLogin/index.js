import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import './index.css'
import Header from "../Header";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      navigate("/admin");
    } else {
      setError(data.message);
    }
  };

  return (
    <>
    <Header/>
    <div className="admin-card">
      <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1729087086~exp=1729090686~hmac=75c17db83c7481f0c7336b707f43c6000057dc6cbc10efc915f4a5daeb5af15c&w=740" alt="img" className="admin-img"/>
      <form onSubmit={handleLogin} className="stu-login">
        <div className="login-card1">
          <h1 className="app-logo">GeoFace</h1>
          <p className="desc">
            Welcome to GeoFace Admin Login | Digital Attendance System. 
            Login to your account to access
          </p>
        </div>
        <div>
          <label className='labels'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='username-input'
          />
        </div>
        <div>
          <label className='labels'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pass-input'
          />
        </div>
        <button type="submit" className='login-btn'>Login</button>
        <br />
        <div className="or-page">
          <p>OR</p>
          <hr/>
          <Link to="/admin-register" className="link">
          <p className="reg">register</p>
          </Link>
        </div>
        <p className="error-msg">{errmsg}</p>
      </form>

     
    </div>
    </>
   
  );
}

export default AdminLogin;
