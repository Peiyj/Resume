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
          Co-founded a mobile application startup focused on connecting sneaker enthusiasts and collectors. 
          Led the technical development of iOS and Android applications serving over 1,000 users. 
          Built a comprehensive platform featuring real-time chat, marketplace functionality, and social networking capabilities. 
          Successfully raised initial funding and established partnerships with local sneaker retailers.
        </p>
        <div className="technologies">
          <span>Swift</span>
          <span>Objective C</span>
          <span>Java</span>
          <span>Firebase</span>
          <span>Firestore</span>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship; 