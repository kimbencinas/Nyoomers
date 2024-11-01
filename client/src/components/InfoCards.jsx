import '../styles/Navbar.css';
import '../styles/InfoCards.css';

function InfoCards({ title, icon, info }) {

    return (
        <div className="card-container">
            <p className="icon">{icon}</p>
            <div>
                <h2 className="info-card-title">{title}</h2>
                <p className="info-card-description">{info}</p>
            </div>
        </div>
    )
}

export default InfoCards;