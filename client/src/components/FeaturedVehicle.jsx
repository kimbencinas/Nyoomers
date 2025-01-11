import '../styles/Navbar.css';
import '../styles/FeaturedVehicle.css';

function FeaturedVehicle({ title, image, powerType, price, mileage }) {

    return (
        <div className="vehicle-container">
            <img src={image} alt={`${title}`} className="vehicle-image" />
            <p className="vehicle-title">{title}</p>
            <div className="middle-row">
                <p className="vehicle-type">{powerType}</p>
                <p> • </p>
                <p className="vehicle-mileage">{mileage}</p>
            </div>
            <div className="last-row">
                <p className="vehicle-price">{price}</p>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
    )
}

export default FeaturedVehicle;