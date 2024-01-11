import Section from "../../components/section/section";
import "./about.css";

export default function About() {
    return (
        <Section id="about" tagline="Learn about me" classNames={{
            container: "--about-section-container"
        }}>
            About
        </Section>
    );
}
