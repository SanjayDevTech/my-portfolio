import Section from "../../section/section";
import Social from "../../social/social";
import Spotify from "../../spotify";

export default function About() {
	return (
		<Section
			id="about"
			tagline="Learn about me"
			classNames={{
				container: "--about-section-container",
			}}
		>
			<div className="--about-section-about">
				<h2>This little part is all about me</h2>
				<h3>
					I am Sanjay. A self-taught Android Developer from Tamilnadu.
					<br /><br />
					I am currently working as a Software Engineer at Esko Graphics.
					<br /><br />
					I love to build apps and websites.
					<br /><br />
				</h3>
			</div>
			<div className="--about-section-pic">
				<img loading="lazy" src="/assets/full-size-sanjay.webp" />
			</div>
			<div className="--about-section-social">
				<Social href="https://github.com/SanjayDevTech" type="github" />
				<Social href="https://youtube.com/@SanjayDevTech" type="youtube" />
				<Social href="/blog" username="blog" type="hashnode" />
				<Social href="https://twitter.com/SanjayDevTech" type="twitter" />
				<Social href="https://linkedin.com/in/sanjaydevtech" type="linkedin" />
			</div>
			<div className="--about-section-spotify">
				<Spotify />
			</div>
		</Section>
	);
}
