import React from 'react';
import './SocialMedia.css'; // Import the associated CSS file

function SocialMedia() {
  return (
    <div className="social-media-container">
      <a href="https://www.facebook.com/daycarecenter" target="_blank" rel="noopener noreferrer" className="social-media-icon">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com/daycarecenter" target="_blank" rel="noopener noreferrer" className="social-media-icon">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/daycarecenter" target="_blank" rel="noopener noreferrer" className="social-media-icon">
        <i className="fab fa-instagram"></i>
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
}

export default SocialMedia;
