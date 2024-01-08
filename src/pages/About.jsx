import React from "react";
import myPicture from "../assets/ana.jpeg"; 
import "../styles/pages/About.css";

function About() {
  return (
    <div className="about-me-container">
      <div className="picture-container">
        <img src={myPicture} alt="My Picture" className="my-picture" />
      </div>

      <div className="text-container">
        <h2>About Me</h2>
          <p>
            ¡Hola! I'm Ana Cristina, and I'm excited to share the vibrant hues
            of my life with you. 🌈 Before we dive into the coding adventures,
            let me whisk you away to the heart of my personal journey.
          </p>
          <p>
            First things first, I'm a culinary explorer, turning my kitchen
            into a canvas for global flavors. From spicy Latin dishes to
            comforting European delights, you'll often find me experimenting
            with ingredients and savoring the joy of creating something
            extraordinary.
          </p>
          <p>
            When I'm not busy crafting code, you'll catch me lost in the
            enchanting realms of literature. Books are not just stories; they're
            portals to different worlds, and I love getting lost in the magic
            woven by brilliant minds.
          </p>
          <p>
            In the professional arena, I've soared through the skies at Copa
            Airlines, danced through the virtual realms at PokerStars, and
            navigated maritime intricacies at EUROPEAN MAR. Each adventure has
            not only refined my skills but has also fueled my love for
            innovation.
          </p>
          <p>
            Now, picture me with a guitar in hand, immersed in the melodies of
            rock, hardcore, and pop-punk. Music is the heartbeat of my personal
            adventures, whether it's a live concert or a cozy night in with my
            favorite vinyl.
          </p>
          <p>
            So, as you step into my personal website, it's not just about
            code—it's an open invitation to share in the joys of culinary
            experiments, literary escapes, music-filled moments, and, of course,
            the fascinating world of web development.
          </p>
          <p>
            Whether you're here for the tech talk, the culinary escapades, or
            just a virtual chat, I'm thrilled to have you join me on this
            colorful journey! 🚀🎸 #WelcomeToMyWorld #WebDeveloperAdventures
            #LetsConnectAndRockOn
          </p>
      </div>
    </div>
  );
}

export default About;

