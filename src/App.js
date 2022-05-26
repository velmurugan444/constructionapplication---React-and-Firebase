import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contactform from "./components/contactform";
import Header from "./components/header";
import Homesection from "./components/homesection";
import Portfolio from "./components/portfolio";
import Preloader from "./components/preloader";
import Services from "./components/services";

function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? <Preloader /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Homesection />} />
        <Route path="/home" element={<Homesection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contactform />} />
      </Routes>
    </div>
  );
}

export default App;
