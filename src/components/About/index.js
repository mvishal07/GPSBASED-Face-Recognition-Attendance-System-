import React from 'react';
import './index.css';
import Header from '../Header';

function About() {
    return (
        <>
        <Header/>
        <div className="about-us-container">
            <h1 className="about-us-title">About GeoFace</h1>
            <p className="about-us-description">
                GeoFace is a cutting-edge attendance system that combines GPS technology with facial recognition to provide accurate and reliable attendance tracking. Our system is designed to streamline attendance management in educational institutions and workplaces by ensuring that attendance is marked only when both location and face recognition match predefined criteria.
            </p>
            <p className="about-us-description">
                The system is simple to use, secure, and ensures accurate data collection, reducing the possibility of fraud or proxy attendance. With GeoFace, organizations can easily manage and verify attendance in real-time, enhancing efficiency and trust in the process.
            </p>
        </div>
        </>
        
    );
}

export default About;
