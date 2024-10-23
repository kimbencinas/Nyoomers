import '../styles/Navbar.css';
import '../styles/App.css';

function InfoCards({ title, image, info }) {

    return (
        <div>
            <img src={image} alt={title} />
            <div>
                <h2 className="info-card-title">{title}</h2>
                <p className="info-card-description">{info}</p>
            </div>
        </div>
    )
}

export default InfoCards;