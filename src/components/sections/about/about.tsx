import Section from "../../section/section";

export default function About() {
	return (
		<Section
			id="about"
			tagline="Learn about me"
			classNames={{
				container: "--about-section-container",
			}}
		>
			<div>This is about me</div>
		</Section>
	);
}
