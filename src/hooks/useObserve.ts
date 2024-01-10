import { Ref, RefObject, useContext, useEffect } from "react";
import GlobalIntersectionObserverContext from "../context/GlobalIntersectionObserverContext";

export default function useObserve(ref: RefObject<HTMLDivElement>) {
    const observer = useContext(GlobalIntersectionObserverContext);
    useEffect(() => {
        if (observer) {
            observer.observe(ref.current!);
            return () => observer.unobserve(ref.current!);
        }
    }, [observer]);
}
