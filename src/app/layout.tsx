import { Metadata, Viewport } from "next";
import localFont from "next/font/local"
import Script from "next/script";
import "../styles/index.scss";
import { cn } from "../utils";

const font = localFont({
	src: [
		{
      path: '../fonts/OttercoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
		{
      path: '../fonts/OttercoDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
		{
			path: "../fonts/OttercoDisplay-Bold.otf",
			weight: "700",
			style: "normal",
		},
	]
});

export const viewport: Viewport = {
	themeColor: "#fff",
};

const title = "Sanjay S | Portfolio";
const description =
	"Sanjay, S is a Software Developer having skills on both Android and Web development. He also writes tech blogs on his website. Published videos on YouTube.";

export const metadata: Metadata = {
	title: title,
	description: description,
	robots: "index, follow",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	metadataBase: new URL("https://sanjaydev.tech"),
	openGraph: {
		type: "profile",
		url: "/",
		title: title,
		description: description,
		images: [{ url: "/assets/metadata-image.png", alt: title }],
	},
	twitter: {
		card: "summary_large_image",
		site: "@sanjaydevtech",
		title: title,
		description: description,
		images: [{ url: "/assets/metadata-image.png", alt: title }],
	},
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(font.className, "bg-white")}>{props.children}</body>
      <Script src="https://godly.sanjaydev.tech/latest.js"  />
		</html>
	);
}
