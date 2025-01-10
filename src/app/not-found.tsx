import { Metadata } from "next";
import Link from "next/link";

const title = "Sanjay S | 404 Page not found";
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

export default function NotFound() {
	return (
		<div className="w-full h-full pt-10 flex flex-col justify-center items-center bg-gray-100">
			<img src="/assets/astronaut.svg" alt="404" className="w-full h-1/2" />
			<h1 className="font-bold text-6xl text-gray-400 mb-5">404 Page not found</h1>
			<h2 className="font-normal text-3xl text-gray-400 mb-5">
				The page you are looking for doesn&apos;t exist
			</h2>
			<Link
				href="/"
				className="mt-5 px-5 py-2.5 rounded-md text-white bg-gray-400 cursor-pointer no-underline"
			>
				Go to Home
			</Link>
		</div>
	);
}
