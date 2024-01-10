import { useRef } from "react";
import useObserve from "../hooks/useObserve";

export default function Works() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    return (
        <section id="works" ref={ref}>
            <p>Things I'm proud of</p>
        </section>
    );
}
