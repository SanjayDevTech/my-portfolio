import classNames, { ArgumentArray } from "classnames";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

export function cn(...inputs: ArgumentArray) {
	return classNames(...inputs);
}

export async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const fullConfig = resolveConfig(tailwindConfig);
export const tw = fullConfig.theme;
