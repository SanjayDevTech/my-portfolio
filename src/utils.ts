import { useMediaQuery } from "usehooks-ts";

export function storage(key: string, value?: string) {
	if (value) {
		return localStorage.setItem(key, value);
	}
	return localStorage.getItem(key);
}

export function useMobile() {
	return useMediaQuery("(max-width: 576px)");
}
