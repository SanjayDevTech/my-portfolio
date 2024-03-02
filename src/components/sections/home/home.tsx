import "./home.css";
import Section from "../../section/section";
import { GitHubIcon } from "../../social-icons";

export default function Home() {
    return (
        <Section id="home" tagline="Glimpse of myself" classNames={{
            container: "--home-section-container",
        }}>
            <div className="--home-section-profile-name-container">
                <p className="--home-section-profile-name">Sanjay S</p>
                <p className="--home-section-profile-headline">Android Developer</p>
                <div className="--home-section-profile-contact">
                    <button title="hello@sanjaydev.tech" onClick={() => {
                        window.open("mailto:hello@sanjaydev.tech", "_blank");
                    }} className="--home-section-profile-contact-btn-secondary">Contact me</button>
                    <button title="https://github.com/SanjayDevTech" onClick={() => {
                        window.open("https://github.com/SanjayDevTech", "_blank");
                    }} className="--home-section-profile-contact-btn"><GitHubIcon className="--home-section-profile-contact-btn-icon" />GitHub</button>
                </div>
            </div>
            <div className="--home-section-profile-picture-container">
                <img className="--home-section-profile-picture" src="/assets/sanjay.webp" alt="Sanjay Profile Picture" />
            </div>
        </Section>
    );
}
