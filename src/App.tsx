import Header from "./components/Navbar"
import Hero from "./components/Hero"
import LocalCrafts from "./components/LocalCrafts"
import Events from "./components/Events"
import Footer from "./components/Footer"
import './index.css'


function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <LocalCrafts />
      <Events />
      <Footer />
    </div>
  )
}

export default App

