import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		backgroundImage: {
			"text-gradient":
				"linear-gradient(90deg, rgb(11, 11, 11) 0%, rgba(12, 12, 12, 0.55) 100%, rgba(12, 12, 12, 0.55) 100%)",
		},
		colors: {
			white: "#ffffff",
			black: "#000000",
			transparent: "transparent",
			gray: {
				50: "#faf9f8",
				100: "#f4f3f2",
				150: "#ecebea",
				200: "#373737",
				300: "#2a2a2a",
				400: "#242424",
			},
			"blue-violet": {
				100: "#121f3e",
			},
		},
		extend: {},
	},
	plugins: [],
};
export default config;
