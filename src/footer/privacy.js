// AboutUs.js

import React, { useEffect } from 'react';
import './AboutUs.css'; // Import your CSS file for About Us styles

const AboutUs = () =>{
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
  <div>
    {/* Banner */}
    

    {/* About Us Content */}
    <div class="about-us-container">
    <h1>Privacy Policy</h1>
    <div id="privacy-policy-output">
          <h2>Introduction</h2>
          <p>Indian Latest News ("us", "we", or "our") operates https://latest-news-india.onrender.com/ (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</p>
<h2>Information Collection And Use</h2>
<p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name and email address ("Personal Information").</p>
<h2>Log Data</h2>
<p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
<h2>Cookies</h2>
<p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
<h2>Security</h2>
<p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
<h2>Changes To This Privacy Policy</h2>
<p>This Privacy Policy is effective as of the date stated at the top of this Privacy Policy and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
<h2>Contact Us</h2>
<p>If you have any questions about this Privacy Policy, please contact us at iln@gmail.com.</p>
</div>
</div>


    {/* Footer */}
    <div className="container mt-4">
      <footer className="py-3 my-4">
        {/* Footer Menu */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
             <b>Home</b>
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-muted">
             <b>About Us</b>
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
             <b>Contact Us</b>
            </a>
          </li>
          <li className="nav-item">
            <a href="/tnc" className="nav-link px-2 text-muted">
             <b>Terms & Conditions</b>
            </a>
          </li>
          <li className="nav-item">
            <a href="/privacy" className="nav-link px-2 text-muted">
             <b>Privacy Policy</b>
            </a>
          </li>
          <li className="nav-item">
            <a href="/disclaimer" className="nav-link px-2 text-muted">
             <b>Disclaimer</b>
            </a>
          </li>
          {/* Add more footer menu items as needed */}
        </ul>
        
        {/* Copyright */}
        <p className="text-center text-muted">© Latest Indian News</p>
      </footer>
    </div>
  </div>
);
};

export default AboutUs;
