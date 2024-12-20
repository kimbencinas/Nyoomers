import './styles/App.css'
import Navbar from './components/Navbar'
import InfoCards from './components/InfoCards'
import Footer from './components/Footer'
import FeaturedVehicle from './components/FeaturedVehicle'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/image/car_image.jpg';

function App() {

  return (
    <>
    <Navbar />
    <div>
      <div className="header-section">
        <div className="slogan">
          <h2>Drive the <span>Future</span> Today</h2>
          <p>
            Experience the perfect blend of performance and sustainability with our premium selection of electric and hybrid vehicles.
          </p>
        </div>
        <div>
          <Link to="/inventory">
            <button className="inventory-button">
              View Inventory
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div className="featured-vehicles">
      <h3>Featured Vehicles</h3>
      <FeaturedVehicle
        image='/assets/image/car_image.jpg'
        title="Porsche Taycan"
        powerType="Electric"
        mileage="100mi"
        price="$90,000"
      />
    </div>
    <div className="info-section">
      <h3 className="why-nyoomers">Why Choose Nyoomers?</h3>
        <div className="info-card-container">
          <InfoCards
            icon="🌱"
            title="Eco-Friendly"
            info="Join the sustainable revolution with zero-emission vehicles"
          />
          <InfoCards
            icon="💰"
            title="Best Prices"
            info="Competitive pricing and excellent financing options"
          />
          <InfoCards
            icon="🔧"
            title="Expert Guidance"
            info="Expert staff to help you find your perfect vehicle"
          />
        </div>
    </div>
    <div className="contact">
      <h3 className="contact-title">Ready to Go Electric?</h3>
      <p className="visit-us">Visit our showroom or contact us to schedule a test drive today!</p>
      <Link to="/contact">
        <button className="contact-button">Contact Us</button>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default App
