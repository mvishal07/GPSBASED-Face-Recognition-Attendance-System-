import { Link } from "react-router-dom";
import Header from "../Header";
import './index.css'; // Importing the styles for the Admin page

const Admin = () => {
  return (
    <>
    <Header/>
    <div className="admin-page">
      <div className="admin-info">
        <img src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?t=st=1729093603~exp=1729097203~hmac=6245a927cb01985e30084076a665f3bd2e4e5c8271b915ebf9fb3b4174a8b314&w=996" alt="dash" className="adminimage"/>
        <h1>Admin Dashboard</h1>
        <p>Manage student registration and attendance records seamlessly.</p>
      </div>

      <div className="admin-buttons">
        <Link to="/register" className="admin-link">
          <button className="admin-btn">

            <span>Register Student</span>
          </button>
        </Link>

        <Link to="/download-attendance" className="admin-link">
          <button className="admin-btn">
               <span>Download Attendance</span>
          </button>
        </Link>
      </div>

      
    </div>
    </>
  );
};
export default Admin;
