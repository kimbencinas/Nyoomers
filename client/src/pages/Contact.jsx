import Navbar from "../components/Navbar"

function Contact() {

    return (
      <div>
        <Navbar />
        <div className="contact">
          <h2>Get In Touch</h2>
          <div>
            <form>
              <input type="text" id="first-name" />
              <input type="text" id="last-name" />
              <input type="text" id="email" />
              <textarea id="message"></textarea>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
  