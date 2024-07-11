import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				cyan: "hsl(180, 66%, 49%)",
				cyanLight: "hsl(180, 66%, 69%)",
				darkViolet: "hsl(257, 27%, 26%)",
				red: "hsl(0, 87%, 67%)",
				grayishViolet: "hsl(257, 7%, 63%)",
				veryDarkBlue: "hsl(255, 11%, 22%)",
				veryDarkViolet: "hsl(260, 8%, 14%) ",
			},

			spacing: {
				180: "32rem",
			},
		},
	},
	plugins: [],
};
export default config;
