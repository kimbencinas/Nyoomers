import '../styles/Footer.css';

function Footer() {

    return (
        <div className="footer-container">
            <div className="nyoomers-section">
                <p className="website-name">Nyoomers</p>
                <p className="website-slogan">Driving the future of sustainable transportation.</p>
            </div>
            <div className="links-section">
                <p className="quick-links">Quick Links</p>
                <p className="link">Home</p>
                <p className="link">About</p>
                <p className="link">Contact</p>
            </div>
            <div className="contact-section">
                <p className="contacts">Contact</p>
                <p className="link">Phone: 209-587-5808</p>
                <p className="link">Email: nyoomersauto@gmail.com</p>
            </div>
            <div className="social-media">
                <p className="follow-us">Follow Us</p>
                <p className="link">Instagram</p>
                <p className="link">Facebook</p>
            </div>
        </div>
    )
}

export default Footer;