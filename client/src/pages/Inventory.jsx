import Navbar from "../components/Navbar"
import FeaturedVehicle from "../components/FeaturedVehicle"

function Inventory() {

    return (
      <>
        <Navbar />
        <div className="inventory-container">
          <h1>Inventory</h1>
          <div className="inventory-cards">
            <FeaturedVehicle
              title="Ford C-Max"
              image="/assets/image/car_image.jpg"
              powerType="Electric"
              mileage="n/a"
              price="n/a"
            />
             <FeaturedVehicle
              title="Ford C-Max"
              image="/assets/image/car_image.jpg"
              powerType="Electric"
              mileage="n/a"
              price="n/a"
            />
          </div>
        </div>
      </>
    )
  }
  
  export default Inventory
  