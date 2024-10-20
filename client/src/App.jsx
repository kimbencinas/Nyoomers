import './styles/App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <div>
      <h2>Drive the Future Today</h2>
      <span>
        Experience the perfect blend of performance and sustainability with our premium selection of electric and hybrid vehicles.
      </span>
      <button class="inventory">
        View Inventory
      </button>
      <button class="schedule">
        View Inventory
      </button>
    </div>
    <div>
      <h3>Featured Vehicles</h3>
    </div>
    <div>
      <h3>Why Choose Nyoomers?</h3>
    </div>
    <div>
      <h3>Ready to Go Electric?</h3>
      <button>Contact Us</button>
    </div>
    </>
  )
}

export default App
