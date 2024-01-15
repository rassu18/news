import React, { useState } from 'react';
import './ContactUsForm.css'; // Import your CSS file for styling

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/rassu18@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        alert('Message sent successfully!');
        // Optionally, clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Error submitting form:', response.statusText);
        alert('Error submitting message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting message. Please try again later.');
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
