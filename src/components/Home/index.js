import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css'; // Importing the new styles
import About from '../About';
import Contact from '../Contact';

function Home() {
    return (
        <>
        <Header />
        <div className='home-page'>
        <img src="https://img.freepik.com/free-vector/appointment-booking-with-woman-smartphone_23-2148557484.jpg?t=st=1729089121~exp=1729092721~hmac=5dbf2893f7d00e8eac2b93759200f229a654f26c1ede7c2144654af9d8c008c7&w=740" alt="home-img" className='home-img'/>
               
            <div className='home-content'>
                
                <h1 className='welcome-heading'>Welcome to <span className='text-s'>GeoFace Attendance System</span></h1>
                <p className='home-description'>
                    Your all-in-one solution for managing attendance using geolocation and facial recognition technology.
                    GeoFace is a user-friendly platform designed for higher education institutions. With automation and advanced technology, our platform enables you 
                    to manage students Attendance. 
                    Experience the power of GeoFace today.
                </p>
                
            </div>
            
        </div>
        
        </>
    );
}

export default Home;
