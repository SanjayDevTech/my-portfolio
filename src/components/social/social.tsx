import GitHubSvg from "../../icons/GitHubSvg";
import LinkedInSvg from "../../icons/LinkedInSvg";
import NextJsSvg from "../../icons/NextJsSvg";
import TwitterSvg from "../../icons/TwitterSvg";
import YouTubeSvg from "../../icons/YouTubeSvg";

interface SocialProps {
	type: "github" | "linkedin" | "twitter" | "youtube" | "hashnode";
	href: string;
	username?: string;
}

function getProperties(type: SocialProps["type"]) {
	switch (type) {
		case "github":
			return {
				icon: <GitHubSvg width={24} height={24} />,
				color: "black",
			};
		case "linkedin":
			return {
				icon: <LinkedInSvg width={24} height={24} />,
				color: "blue",
			};
		case "twitter":
			return {
				icon: <TwitterSvg width={24} height={24} />,
				color: "black",
			};
		case "youtube":
			return {
				icon: <YouTubeSvg width={24} height={24} />,
				color: "red",
			};
		case "hashnode":
			return {
				icon: <NextJsSvg width={24} height={24} />,
				color: "white",
			};
	}
}

export default function Social(props: SocialProps) {
	const { icon, color } = getProperties(props.type);
	return (
		<a className={`--social-link color-${color}`} href={props.href} target="_blank">
			{icon}/ {props.username ?? props.href.split("/").pop()}
		</a>
	);
}
