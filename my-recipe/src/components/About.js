import React from "react";
import "./About.css";
import aboutImage from "../images/Free_Sample_By_Wix.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Recipe Sharing Platform</h1>
        <p>
          Our recipe sharing platform is dedicated to helping food lovers around
          the world discover new and delicious recipes. Whether you're a seasoned
          cook or just starting out, our platform has something for everyone.
        </p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make cooking and baking accessible to everyone by
            providing a platform where users can share their favorite recipes,
            learn new cooking techniques, and connect with like-minded foodies.
          </p>
          <h2>How It Works</h2>
          <p>
            Users can create a free account and start sharing their favorite
            recipes with the community. They can also browse recipes from other
            users, save their favorites, and leave comments and ratings.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team is made up of passionate food lovers and experienced web
            developers who are dedicated to creating the best recipe sharing
            platform possible.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;


