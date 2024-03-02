import {
	GitHubIcon,
	GmailIcon,
	LinkedInIcon,
	NextjsIcon,
	TwitterIcon,
	YoutubeIcon,
} from '../social-icons';
import './social.css';

interface SocialProps {
	type: 'github' | 'linkedin' | 'twitter' | 'youtube' | 'hashnode' | 'gmail';
	href: string;
	username?: string;
}

function getProperties(type: SocialProps['type']) {
	switch (type) {
		case 'github':
			return {
				icon: <GitHubIcon className="--social-link-icon" />,
				color: 'black',
			};
		case 'linkedin':
			return {
				icon: <LinkedInIcon className="--social-link-icon" />,
				color: 'blue',
			};
		case 'twitter':
			return {
				icon: <TwitterIcon className="--social-link-icon" />,
				color: 'black',
			};
		case 'youtube':
			return {
				icon: <YoutubeIcon className="--social-link-icon" />,
				color: 'red',
			};
		case 'hashnode':
			return {
				icon: <NextjsIcon className="--social-link-icon" />,
				color: 'white',
			};
		case 'gmail':
			return {
				icon: <GmailIcon className="--social-link-icon" />,
				color: 'red-shade',
			};
	}
}

export default function Social(props: SocialProps) {
	const { icon, color } = getProperties(props.type);
	return (
		<a className={`--social-link --social-color-${color}`} href={props.href} target="_blank">
			{icon}/ {props.username ?? props.href.split('/').pop()}
		</a>
	);
}
