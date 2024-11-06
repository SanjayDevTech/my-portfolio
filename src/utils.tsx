import classNames, { ArgumentArray } from "classnames";

export function cn(...inputs: ArgumentArray) {
	return classNames(...inputs);
}

export async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
