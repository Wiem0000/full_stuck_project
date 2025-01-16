import React from 'react';
import './Home.css'; // Import the CSS file

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to My React App</h1>
        <p>This is a background video example.</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;