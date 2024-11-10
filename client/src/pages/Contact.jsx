import Navbar from "../components/Navbar"
import '../styles/Contact.css'

function Contact() {

    return (
      <div>
        <Navbar />
        <div className="contact">
          <h2>Get In Touch</h2>
          <div>
            <form className="contact-form">
              <input type="text" id="first-name" placeholder="First Name" />
              <input type="text" id="last-name" placeholder="Last Name" />
              <input type="text" id="email" placeholder="Email Address" />
              <textarea id="message" placeholder="Message"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
  