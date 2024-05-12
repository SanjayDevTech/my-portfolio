import { RefObject, useContext, useEffect } from "react";
import GlobalIntersectionObserverContext from "../context/GlobalIntersectionObserverContext";

export default function useObserve(ref: RefObject<HTMLDivElement>) {
	const observer = useContext(GlobalIntersectionObserverContext);
	useEffect(() => {
		if (observer) {
			const el = ref.current!;
			observer.observe(el);
			return () => observer.unobserve(el);
		}
	}, [observer]);
}
