import { useRef } from "react";
import useObserve from "../hooks/useObserve";

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    
    return (
        <section className="--section-container" id="skills" ref={ref}>
            <p>Flexing time!</p>
        </section>
    );
}
