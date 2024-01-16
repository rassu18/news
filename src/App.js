// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/News";
import AboutUs from "./footer/AboutUs";
import ContactUs from "./footer/ContactUsForm";
import Disclaimer from "./footer/disclaimer";
//import TermsConditions from "./TermsConditions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/disclaimer" element={<Disclaimer />} />
       {/* <Route path="/terms" element={<TermsConditions />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
