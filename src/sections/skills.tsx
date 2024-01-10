import { useRef } from "react";
import useObserve from "../hooks/useObserve";

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    useObserve(ref);
    
    return (
        <section id="skills" ref={ref}>
            <p>Flexing time!</p>
        </section>
    );
}
