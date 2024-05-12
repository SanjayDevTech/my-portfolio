import { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/index.scss';

const font = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const viewport: Viewport = {
	themeColor: '#151e3f',
};

const title = 'Sanjay S | Portfolio';
const description =
	'Sanjay, S is a Software Developer having skills on both Android and Web development. He also writes tech blogs on his website. Published videos on YouTube.';

export const metadata: Metadata = {
	title: title,
	description: description,
	robots: 'index, follow',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
	metadataBase: new URL('https://sanjaydev.tech'),
	openGraph: {
		type: 'profile',
		url: '/',
		title: title,
		description: description,
		images: [{ url: '/assets/metadata-image.png', alt: title }],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@sanjaydevtech',
		title: title,
		description: description,
		images: [{ url: '/assets/metadata-image.png', alt: title }],
	},
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>{props.children}</body>
		</html>
	);
}
