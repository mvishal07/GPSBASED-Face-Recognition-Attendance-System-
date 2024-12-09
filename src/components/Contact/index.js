import React, { useState } from 'react';
import './index.css'; // Importing the styles for the Contact Us section
import Header from '../Header';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission process
        setStatusMessage('Thank you for reaching out! We will get back to you soon.');
    };

    return (
        <>
        <Header/>
        <div className="contact-us-container">
            <h1 className="contact-us-title">Contact Us</h1>
            <p className="contact-us-description">
                We’d love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <form className="contact-us-form" onSubmit={handleSubmit}>
                <label className="contact-label">Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="contact-input" 
                    placeholder="Enter your name" 
                />
                
                <label className="contact-label">Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="contact-input" 
                    placeholder="Enter your email" 
                />
                
                <label className="contact-label">Message</label>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                    className="contact-input" 
                    placeholder="Write your message here" 
                />

                <button type="submit" className="contact-submit">Send Message</button>
            </form>

            {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
        </>
        
    );
}

export default Contact;
