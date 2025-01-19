import Navbar from "../components/Navbar"
import FeaturedVehicle from "../components/FeaturedVehicle"
import '../styles/Inventory.css'

function Inventory() {

    return (
      <>
        <Navbar />
        <div className="inventory-container">
          <h1 className="page-title">Inventory</h1>
          <div className="inventory-cards">
            <FeaturedVehicle
              title="2015 Ford C-Max"
              image="/assets/image/car_image.jpg"
              powerType="Electric"
              mileage="n/a"
              price="$5,000"
            />
          
          </div>
        </div>
      </>
    )
  }
  
  export default Inventory
  