import '../styles/Navbar.css';
import '../styles/InfoCards.css';

function InfoCards({ title, icon, info }) {

    return (
        <div>
            <p>{icon}</p>
            <div>
                <h2 className="info-card-title">{title}</h2>
                <p className="info-card-description">{info}</p>
            </div>
        </div>
    )
}

export default InfoCards;