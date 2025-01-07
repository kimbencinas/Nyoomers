import '../styles/Footer.css';

function Footer() {

    return (
    <div className="container">
        <div className="footer-container">
            <div className="nyoomers-section">
                <p className="website-name">Nyoomers</p>
                <p className="website-slogan">Driving the future of sustainable transportation.</p>
            </div>
            <ul className="links-section">
                <li className="quick-links">Quick Links</li>
                <li className="link">Home</li>
                <li className="link">About</li>
                <li className="link">Contact</li>
            </ul>
            <ul className="contact-section">
                <li className="contacts">Contact</li>
                <li className="link">Phone: 209-587-5808</li>
                <li className="link">Email: nyoomersauto@gmail.com</li>
            </ul>
            <ul className="social-media">
                <li className="follow-us">Follow Us</li>
                <li className="link">Instagram</li>
                <li className="link"><a href="https://www.facebook.com/people/Nyoomers/61567842125543/">Facebook</a></li>
            </ul>
        </div>
        <hr></hr>
        <div>
            <p className="copyright">© 2024 Nyoomers. All rights reserved.</p>
        </div>
    </div>
    )
}

export default Footer;