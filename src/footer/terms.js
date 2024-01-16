// AboutUs.js

import React, { useEffect } from 'react';
import './AboutUs.css'; // Import your CSS file for About Us styles

const AboutUs = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

return(
  <div>
    {/* Banner */}
    

    {/* About Us Content */}
    <div class="about-us-container">
    <div id="output">
          <h1>Terms and Conditions</h1>
          <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Indian Latest News website (the "Service") operated by Indian Latest News ("us", "we", or "our").</p>
          <h2>Accounts</h2>
          <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
          <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
      <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
      <h2>Links To Other Web Sites</h2>
      <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Indian Latest News.</p>
      <p>Indian Latest News has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Indian Latest News shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
      <h2>Changes</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at iln@gmail.com.</p>
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
          {/* <li className="nav-item">
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
          </li> */}
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
