import React from "react";
import myPicture from "../path-to-your-picture.jpg"; // Update with the actual path to your picture
import "../styles/About.css";

function About() {
  return (
    <div className="about-me-container">
      {/* Picture on the left */}
      <div className="picture-container">
        <img src={myPicture} alt="My Picture" className="my-picture" />
      </div>

      {/* Text on the right */}
      <div className="text-container">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Integer nec odio. Praesent libero. Sed cursus ante dapibus
          diam.
        </p>
        {/* Add more text or content about yourself */}
      </div>
    </div>
  );
}

export default About;

