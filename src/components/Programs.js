import React from 'react';
import './Programs.css'; // Import the associated CSS file

function Programs() {
  return (
    <div className="programs-container">
      <h2>Our Programs</h2>
      <p>We offer a variety of educational and fun programs for different age groups.</p>
      {/* Display information about your daycare's programs */}
      <div className="program">
        <h3>Preschool Program</h3>
        <p>Our preschool program focuses on early childhood development through play-based learning.</p>
      </div>
      <div className="program">
        <h3>After-School Activities</h3>
        <p>Our after-school activities include arts and crafts, sports, and educational games.</p>
      </div>
      {/* Add more programs as needed */}
    </div>
  );
}

export default Programs;
