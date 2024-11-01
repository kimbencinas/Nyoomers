import '../styles/Navbar.css';
import '../styles/InventoryCard.css';

function FeaturedVehicle({ title, image, powerType, price, mileage }) {

    return (
        <div>
            <img src={image} alt={`${title}`} className="vehicle-image" />
            <p className="vehicle-title">{title}</p>
            <p className="vehicle-type">{powerType}</p>
            <p className="vehicle-mileage">{mileage}</p>
            <p className="vehicle-price">{price}</p>
        </div>
    )
}

export default FeaturedVehicle;