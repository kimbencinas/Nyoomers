import Navbar from "../components/Navbar"

function Inventory() {

    return (
      <>
        <Navbar />
        <div className="sidebar"></div>
        <div className="container">
          <h1>Inventory</h1>
          <div className="sort-results">
            <p>results</p>
            <p>Sort by: </p>
          </div>
          <div className="inventory-cards">

          </div>
        </div>
      </>
    )
  }
  
  export default Inventory
  