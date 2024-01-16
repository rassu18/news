// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/News";
import AboutUs from "./footer/AboutUs";
import ContactUs from "./footer/ContactUsForm";
import Disclaimer from "./footer/disclaimer";
import banner from './images/banner.jpg'; 
import Privacy from "./footer/privacy";// Import your banner image
import TermsConditions from "./footer/terms";

const App = () => {
  return (
    <div>
      <img className="container-fluid" src={banner} width="1200px" alt="Banner" />
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/disclaimer" element={<Disclaimer />} />
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/tnc" element={<TermsConditions />} /> 
      </Routes>
    </Router>
    </div>
  );
};

export default App;
