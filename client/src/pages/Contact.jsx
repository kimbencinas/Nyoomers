import React, { useState } from "react";
import Navbar from "../components/Navbar"
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id,value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

    return (
      <div>
        <Navbar />
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <form className="contact-form">
            <input 
              type="text" 
              id="first-name" 
              placeholder="First Name" 
              value={formData.first}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              id="last-name" 
              placeholder="Last Name" 
              value={formData.last}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              id="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <textarea 
              id="message" 
              placeholder="Message" 
              value={formData.message}
              onChange={handleInputChange}
              required>
            </textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact
  