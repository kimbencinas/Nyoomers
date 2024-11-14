import Navbar from "../components/Navbar"
import '../styles/Contact.css'

function Contact() {

    return (
      <div>
        <Navbar />
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <form className="contact-form">
            <input type="text" id="first-name" placeholder="First Name" required />
            <input type="text" id="last-name" placeholder="Last Name" required />
            <input type="text" id="email" placeholder="Email Address" required />
            <textarea id="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact
  