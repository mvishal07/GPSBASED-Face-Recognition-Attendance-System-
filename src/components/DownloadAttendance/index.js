import React from 'react';
import './index.css'; // Import the CSS file for styles
import Header from '../Header';

const DownloadAttendance = () => {
  // Function to download the attendance records
  const handleDownload = () => {
    fetch('http://localhost:5000/admin/download_attendance', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/csv',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.blob(); // Get the response as a blob (binary large object)
        } else {
          throw new Error('Failed to download attendance records');
        }
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'attendance_records.csv'); // Set file name
        document.body.appendChild(link);
        link.click(); // Trigger the download
        link.parentNode.removeChild(link); // Clean up
      })
      .catch((error) => {
        console.error('Error downloading attendance:', error);
      });
  };

  return (
    <>
    <Header/>
    <div className="download-attendance-page">
      <div className="download-attendance-content">
        <h2>Download Attendance Records</h2>
        <p>Click the button below to download the latest attendance records as a CSV file. Keep track of student attendance with ease.</p>
        <button className="download-btn" onClick={handleDownload}>
          Download Attendance CSV
        </button>
      </div>
    </div>
    </>
    
  );
};

export default DownloadAttendance;
