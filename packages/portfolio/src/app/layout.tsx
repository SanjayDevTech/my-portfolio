import { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/anim.css';
import '../styles/index.css';

const font = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const viewport: Viewport = {
	themeColor: '#151e3f',
};

export const metadata: Metadata = {
	title: 'Sanjay S - Portfolio',
	description:
		'Sanjay, S is a Software Developer having skills on both Android and Web development',
	robots: 'index, follow',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.va = window.va || function () {(window.vaq = window.vaq || []).push(arguments); };`,
					}}
				/>
			</head>
			<body>
				<div id="next-app" className={font.className}>
					{props.children}
				</div>
				<script defer src="/_vercel/insights/script.js"></script>
			</body>
		</html>
	);
}
