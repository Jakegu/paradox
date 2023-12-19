import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/home";
import About from "./pages/about";
import MontyHall from "./pages/montyHall";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Banner />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/montyHall" element={<MontyHall />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
