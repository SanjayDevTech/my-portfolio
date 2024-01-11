import { useRef } from "react";
import useObserve from "../hooks/useObserve";

export default function Services() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    return (
        <section className="--section-container" id="services" ref={ref}>
            <p>I help you with</p>
        </section>
    );
}
