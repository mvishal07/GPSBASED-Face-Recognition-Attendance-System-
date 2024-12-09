import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Attendance from "./components/Attendance";
import Home from "./components/Home";
import RegisterStudent from "./components/Registration";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import AdminRegistration from "./components/AdminRegistration";
import DownloadAttendance from "./components/DownloadAttendance";
import About from "./components/About";
import Contact from './components/Contact'
import Admin from './components/Admin'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/download-attendance" element={<DownloadAttendance/>} />
          <Route path="/admin-register" element={<AdminRegistration />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
