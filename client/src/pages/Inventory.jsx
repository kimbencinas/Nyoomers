import Navbar from "../components/Navbar"
import InventoryCard from "../components/InventoryCard"

function Inventory() {

    return (
      <>
        <Navbar />
        <div className="sidebar">
          <>
          </>
        </div>
        <div className="container">
          <h1>Inventory</h1>
          <div className="sort-results">
            <p>results</p>
            <p>Sort by: </p>
          </div>
          <div className="inventory-cards">
            <InventoryCard
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
  