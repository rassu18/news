import React from "react";
import { useForm } from "@formspree/react";
import banner from '../images/banner.jpg';
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgpnze");
  if (state.succeeded) {
    return(
      <div className="container" >
                  <b className="help-block text-success pb-4">
                    <marquee>Thank you for contacting us! We will get back to you soon.</marquee>
                  </b>
                  <br />
                  <b className="position-relative d-flex align-items-center justify-content-center pb-4">Have a nice day!</b>

                  <div className="container mt-4">
      <footer className="py-3 my-4">
        {/* Footer Menu */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              <b>Home</b>
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
  }
  return (
    
    <div className="container-fluid">

      <div className="container">

        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 class='display-1 text-uppercase text-white'>Contact</h1>
          <h1 class="position-absolute text-uppercase text-primary">
            Contact Us
          </h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-form text-center">
              <div id="success"></div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div class='control-group col-sm-6'>
                <input id="email" type="email" name="email" class='form-control p-4' placeholder="Your Email" required='required' data-validation-required-message='Please enter your email'/>
                <p class='help-block'></p>
                </div>

                <div class='control-group'>
                <textarea id="message" name="message" class='form-control py-3 px-4' rows='5' required='required' data-validation-required-message='Please enter your message'/>
                <p class='help-block'></p>
                </div>

                <button type="submit" disabled={state.submitting} class='btn btn-outline-primary'>
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container mt-4">
      <footer className="py-3 my-4">
        {/* Footer Menu */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              <b>Home</b>
            </a>
          </li>
          {/* Add more footer menu items as needed */}
        </ul>
        
        {/* Copyright */}
        <p className="text-center text-muted">© Latest Indian News</p>
      </footer>
    </div>

      </div>

      

    </div>

  

  );
}
function App() {
  return <ContactForm />;
}
export default App;
