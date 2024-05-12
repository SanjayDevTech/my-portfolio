import { useContext } from "react";
import GlobalIntersectionObserverContext from "../context/GlobalIntersectionObserverContext";

export default function useGlobalIntersectionObserver() {
	return useContext(GlobalIntersectionObserverContext);
}
