import Section from "../../section/section";

export default function Home() {
	return (
		<Section
			id="home"
			tagline="Glimpse of myself"
			classNames={{
				container: "--home-section-container",
			}}
		>
			<div className="--home-section-profile-name-container">
				<h1 className="--home-section-profile-name">Sanjay S</h1>
				<h2 className="--home-section-profile-headline">Android Developer</h2>
				<div className="--home-section-profile-contact">
					<a
						href="mailto:hello@sanjaydev.tech"
						className="--home-section-profile-contact-btn secondary"
					>
						Contact me
					</a>
				</div>
			</div>
			<div className="--home-section-profile-picture-container">
				<img
					className="--home-section-profile-picture"
					src="/assets/sanjay.webp"
					alt="Sanjay Profile Picture"
				/>
			</div>
		</Section>
	);
}
