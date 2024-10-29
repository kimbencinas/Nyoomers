import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav>
            <div className="logo">
                <p><Link to="/">Nyoomers</Link></p>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;