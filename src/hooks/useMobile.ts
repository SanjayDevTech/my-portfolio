import { useMediaQuery } from "usehooks-ts";

export default function useMobile() {
	return useMediaQuery("(max-width: 870px)");
}
