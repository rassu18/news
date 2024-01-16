// AboutUs.js

import React, { useEffect } from 'react';
import './AboutUs.css'; // Import your CSS file for About Us styles

const AboutUs = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return(
  <div className='justify'>
    {/* Banner */}
    {/* <img className="container-fluid" src={banner} width="1200px" alt="Banner" /> */}

    {/* Disclaimer Content */}
    <div class="about-us-container">
    <h1>Disclaimer for "Latest Indian News"</h1>
    <p>
    If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at
"iln@gmail.com"     </p>
    <p>
    All the information on this website -" https://latest-news-india.onrender.com/" 
is published in good faith and for general information purpose only.    </p>
    <p>
    "https://latest-news-india.onrender.com/" 
     does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website , is strictly at your own risk.     </p>
    <p>
    "Latest Indian News" will not be liable for any losses and/or damages in connection with the use of our website. From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link that may have gone 'bad'.    </p>
    <p>
    Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their Terms of Service before engaging in any business or uploading any information.    </p>

    <h1>Consent</h1>
    <p>
    By using our website, you hereby consent to our disclaimer and agree to its terms.

    </p>

    <h1>Update</h1><p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>

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
