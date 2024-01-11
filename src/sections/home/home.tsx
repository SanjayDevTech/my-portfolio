import "./home.css";
import Section from "../../components/section/section";
import { useState } from "react";

const headlines = ["Software Developer", "Android Developer", "Web Developer"];

function getNextHeadlineIndex(currentIndex: number) {
    return (currentIndex + 1) % headlines.length;
}


export default function Home() {
    const [headlineIndex, setHeadlineIndex] = useState(0);
    return (
        <Section id="home" tagline="Glimpse of myself" classNames={{
            container: "--home-section-container",
        }}>
            <div className="--home-section-profile-name-container">
                <p className="--home-section-profile-name">Sanjay S</p>
                <p onClick={() => {
                    setHeadlineIndex(getNextHeadlineIndex(headlineIndex));
                }} className="--home-section-profile-headline">{headlines[headlineIndex]}</p>
            </div>
            <div className="--home-section-profile-picture-container">
                <img loading="lazy" className="--home-section-profile-picture" src="https://i.ibb.co/1vphYyB/photo-2024-01-11-20-12-12.jpg" alt="Sanjay Picture" />
            </div>
        </Section>
    );
}
