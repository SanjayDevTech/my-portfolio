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
                <img loading="lazy" className="--home-section-profile-picture" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </Section>
    );
}
