import React from 'react';
import './Contact.css'; // Import the associated CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to get in touch with us.</p>
      <div className="contact-details">
        <p>Email: info@daycarecenter.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      {/* Add a contact form or other relevant information */}
    </div>
  );
}

export default Contact;
