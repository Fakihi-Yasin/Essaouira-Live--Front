import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import LocalCrafts from "./components/LocalCrafts";
import Events from "./components/Events";
import Footer from "./components/Footer";
import './index.css';
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/local-crafts" element={<LocalCrafts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


