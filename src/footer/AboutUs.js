// AboutUs.js

import React from 'react';
import banner from '../images/banner.jpg'; // Import your banner image
import './AboutUs.css'; // Import your CSS file for About Us styles

const AboutUs = () => (
  <div>
    {/* Banner */}
    <img className="container-fluid" src={banner} width="1200px" alt="Banner" />

    {/* About Us Content */}
    <div class="about-us-container">
    <h1>About Us</h1>
    <p>
        Welcome to Latest Indian News, your premier destination for staying informed about the latest happenings across the diverse landscape of India. We take pride in being your go-to source for reliable news, providing you with a comprehensive view of the nation's pulse.
    </p>
    <p>
        At Latest Indian News, our dedicated team of seasoned journalists and passionate news enthusiasts is committed to delivering up-to-date and accurate information. We cover a wide array of topics, including breaking news, business updates, political developments, entertainment highlights, health insights, science discoveries, sports events, and the cutting-edge advancements in technology.
    </p>
    <p>
        Our mission is to present you with a curated selection of news stories, ensuring that you receive a well-rounded perspective on the issues that matter most. We believe in the power of knowledge and understand the importance of trustworthy reporting.
    </p>
    <p>
        Whether you are seeking quick updates on current events or in-depth analysis, Latest Indian News has you covered. We strive to maintain high standards of quality and credibility, offering a platform where you can rely on the information you receive.
    </p>
    <p>
        Thank you for choosing Latest Indian News as your trusted news source. Stay informed, stay connected, and embark on a journey with us as we bring you the latest and most relevant news stories from every corner of India.
    </p>
</div>


    {/* Footer */}
    <div className="container mt-4">
      <footer className="py-3 my-4">
        {/* Footer Menu */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          {/* Add more footer menu items as needed */}
        </ul>
        
        {/* Copyright */}
        <p className="text-center text-muted">© Your News App</p>
      </footer>
    </div>
  </div>
);

export default AboutUs;