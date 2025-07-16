import React from 'react';

const Entrepreneurship = () => {
  return (
    <section className="entrepreneurship">
      <h2>🚀 Entrepreneurship</h2>
      <div className="job">
        <div className="job-header">
          <h3>👟 Solemate</h3>
          <span className="date">📅 January 2017 - August 2017</span>
          <span className="location">📍 San Diego, CA</span>
        </div>
        <h4>💡 Co-Founder & CTO</h4>
        <p>
          Developed the Solemate iOS App using Swift and Objective C for 1.8K daily active patients who have ankle injuries.
          Designed adaptive UI with CSS to display the rehabilitation data and send it to their doctors using Firestore and ML kit.
        </p>
        <div className="technologies">
          <span>Swift</span>
          <span>Objective C</span>
          <span>CSS</span>
          <span>Firestore</span>
          <span>ML Kit</span>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship; 