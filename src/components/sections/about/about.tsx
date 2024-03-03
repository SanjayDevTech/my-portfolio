import Section from '../../section/section';
import Social from '../../social/social';
import './about.css';

export default function About() {
	return (
		<Section
			id="about"
			tagline="Learn about me"
			classNames={{
				container: '--about-section-container',
			}}
		>
			<div className="--about-section-half">
				<div className="--about-section-about">
					Hi there, I'm Sanjay S 👋
					<br />
					<br />
					I'm an Android Developer but with Web skills on my toolset
					<br />
				</div>
				<div className="--about-section-social-icons">
					<Social type="github" href="https://github.com/SanjayDevTech" />
					<Social type="linkedin" href="https://www.linkedin.com/in/sanjaydevtech" />
					<Social type="youtube" href="https://www.youtube.com/@SanjayDevTech" />
					<Social
						type="hashnode"
						href="https://sanjaydev.tech/blog"
						username="sanjaydev.tech/blog"
					/>
					{/* <Social type="gmail" href="mailto:hello@sanjaydev.tech" username="hello@sanjaydev.tech" /> */}
					<Social type="twitter" href="https://twitter.com/SanjayDevTech" />
				</div>
			</div>
			<div className="--about-section-half">
				<div className="--about-section-passion">
					<h2>Positions</h2>
					<ul>
						<li title="GDSC Club Lead" className="--about-section-passion-item">
							<div className="--about-section-position-container primary">
								<img className="--about-section-position-img" src="/assets/gdsc.webp" alt="GDSC" />
							</div>
						</li>
						<li title="Software Engineer Trainee" className="--about-section-passion-item">
							<div className="--about-section-position-container white">
								<img className="--about-section-position-img" src="/assets/esko.webp" alt="GDSC" />
							</div>
						</li>
					</ul>
				</div>
				<div className="--about-section-hobbies">
					<h2>Hobbies</h2>
					<ul>
						<li title="GDSC Club Lead" className="--about-section-passion-item">
							<div className="--about-section-position-container primary">
								<img className="--about-section-position-img" src="/assets/gdsc.webp" alt="GDSC" />
							</div>
						</li>
						<li title="Software Engineer Trainee" className="--about-section-passion-item">
							<div className="--about-section-position-container white">
								<img className="--about-section-position-img" src="/assets/esko.webp" alt="GDSC" />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</Section>
	);
}
