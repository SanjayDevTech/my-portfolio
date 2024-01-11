import { useRef } from "react";
import useObserve from "../../hooks/useObserve";
import "./home.css";

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    return (
        <section className="--section-container" id="home" ref={ref}>
            <p>Glimpse of myself</p>
        </section>
    );
}
