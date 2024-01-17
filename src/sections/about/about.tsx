import Section from "../../components/section/section";
import Social from "../../components/social/social";
import "./about.css";

export default function About() {
    return (
        <Section id="about" tagline="Learn about me" classNames={{
            container: "--about-section-container"
        }}>
            <div className="--about-section-half">
                <div className="--about-section-about">
                    Hi there, I'm Sanjay S 👋
                    <br /><br />
                    I'm an Android Developer but with Web skills on my toolset
                    <br />
                </div>
                <div className="--about-section-social-icons">
                    <Social type="github" href="https://github.com/SanjayDevTech" />
                    <Social type="linkedin" href="https://www.linkedin.com/in/sanjaydevtech" />
                    <Social type="youtube" href="https://www.youtube.com/@SanjayDevTech" />
                    <Social type="medium" href="https://sanjaydevtech.medium.com" username="@sanjaydevtech" />
                    <Social type="gmail" href="mailto:sureshsanjay805@gmail.com" username="sureshsanjay805" />
                    <Social type="twitter" href="https://twitter.com/SanjayDevTech" />
                </div>

            </div>
            <div className="--about-section-half">
                <div className="--about-section-passion">
                    <h1>Positions</h1>
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
                    <h1>Hobbies</h1>
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
