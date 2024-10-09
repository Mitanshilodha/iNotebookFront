import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Page</h2>
      <p className="about-content">
       iNotebook is a note-taking application designed to help users easily organize and manage their notes.
       It allows users to create, edit, and delete notes. 
       The app is built using the React.js framework for the frontend and Node.js with Express for the backend.
      </p>
    </div>
  );
};

export default About;
