import './styles/App.css'
import Navbar from './components/Navbar'
import InfoCards from './components/InfoCards'

function App() {

  return (
    <>
    <Navbar />
    <div>
      <div className="slogan">
        <h2>Drive the <span>Future</span> Today</h2>
        <p>
          Experience the perfect blend of performance and sustainability with our premium selection of electric and hybrid vehicles.
        </p>
      </div>
      <div>
        <button className="inventory-button">
          View Inventory
        </button>
        <button className="schedule-button">
          View Inventory
        </button>
      </div>
    </div>
    <div className="featured-vehicles">
      <h3>Featured Vehicles</h3>
    </div>
    <div>
      <h3 className="why-nyoomers">Why Choose Nyoomers?</h3>
      <div className="info-section">
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
      <h3>Ready to Go Electric?</h3>
      <p>Visit our showroom or contact us to schedule a test drive today!</p>
      <button className="contact-button">Contact Us</button>
    </div>
    </>
  )
}

export default App
