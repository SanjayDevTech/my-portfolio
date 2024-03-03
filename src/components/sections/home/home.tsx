import NextJsSvg from '../../../icons/NextJsSvg';
import Section from '../../section/section';
import './home.css';

export default function Home() {
	return (
		<Section
			id="home"
			tagline="Glimpse of myself"
			classNames={{
				container: '--home-section-container',
			}}
		>
			<div className="--home-section-profile-name-container">
				<p className="--home-section-profile-name">Sanjay S</p>
				<p className="--home-section-profile-headline">Android Developer</p>
				<div className="--home-section-profile-contact">
					<a
						href='mailto:hello@sanjaydev.tech'
						className="--home-section-profile-contact-btn secondary"
					>
						Contact me
					</a>
					<a
						href='/blog'
						className="--home-section-profile-contact-btn primary"
					>
						<NextJsSvg width={24} height={24} className="--home-section-profile-contact-btn-icon" />
						My Blog
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
