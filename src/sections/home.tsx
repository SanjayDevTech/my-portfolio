import { useRef } from "react";
import useObserve from "../hooks/useObserve";

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    return (
        <section id="home" ref={ref}>
            <p>Glimpse of myself</p>
        </section>
    );
}
