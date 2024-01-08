// About.jsx
import React from "react";
import myPicture from "../assets/ana.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/pages/About.css";

function About() {
return (
<main className="about-me-container">
	<section className="picture-container">
		<img src={myPicture} alt="My Picture" className="my-picture" />
			<section className="social-icons">
				{/* Social media icons with links */}
				<a href="https://www.linkedin.com/in/anabest/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="https://github.com/AnitaToRemember" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://www.instagram.com/thisis_anab/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faInstagram} />
				</a>
			</section>
		</section>
		<section className="text-container">
			<h2 className="about-title">About Me</h2>
			<br/>
			<article>
						<p>
							¡Hola! I'm Ana Cristina, and as you step into the dynamic landscape of my personal and professional journey, you're not just exploring passions but witnessing the craftsmanship behind services designed to elevate businesses.🌈Beyond the professional chapters of soaring through the skies at Copa Airlines, navigating virtual realms at PokerStars, and delving into maritime intricacies at EUROPEAN MAR, lies a realm of skillful dedication.
						</p>
						<br/>
						<p>
							With a rich background shaped by diverse industries, I offer a unique blend of expertise in web programming, project management, and customer support. Amidst the delightful chaos that dogs bring and the enchantment inspired by Harry Potter and Pokémon quests, my family forms the foundation of my dedication and professionalism. They embody the values I infuse into my work—unbounded energy, unwavering commitment, and a touch of magic—creating a seamless synergy in every endeavor.
						</p>
						<br />
						<p>
							As you navigate through my personal website, consider it more than just a glimpse into my world. It's an invitation to explore services crafted with precision and passion, specifically tailored to elevate small businesses. Whether you seek a tech-savvy collaborator, an innovative project manager, a small business owner, or a dedicated customer support expert, I'm thrilled to have you delve into this multifaceted adventure with me! 🚀💼✨ 	
						</p>
						<br/>
						<p>
						#WelcomeToMyWorld #SmallBusinessServices #LetsConnectAndElevate
						</p>
					</article>
			</section>
</main>
);
}

export default About;
