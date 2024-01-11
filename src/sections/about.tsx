import { useRef } from "react";
import useObserve from "../hooks/useObserve";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    return (
        <section className="--section-container" id="about" ref={ref}>
            <p>Learn about me</p>
        </section>
    );
}
