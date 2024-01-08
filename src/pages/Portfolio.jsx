import socialMedia from '../data/socialMedia.json'
import "../styles/pages/Portfolio.css"

function Portfolio() {
		
	return (
		<section className="social-media">
			<ul className="profile-list">
				{socialMedia.map(profile => (
					<li key={profile.id} className='profile'>
						<button className='profile-button'>
							<a href={profile.url} target='_blank' rel='noreferrer' className='profile-link'>
								{profile.name}
								{profile.img}
							</a>
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
export default Portfolio