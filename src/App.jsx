import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import Quiz from "./pages/Quiz";
import Tips from "./pages/Tips";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css"; // Pastikan path ini sesuai dengan struktur folder Anda

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path= "/careers/:id" element= {<CareerDetail />} />
          <Route path= "/quiz" element= {<Quiz /> } />
          <Route path= "/tips" element= {<Tips /> } />
          <Route path= "/about" element= {<About /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;