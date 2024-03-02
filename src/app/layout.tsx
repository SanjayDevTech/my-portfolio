import "../styles/index.css";
import "../styles/anim.css";
import { Inter } from 'next/font/google';
import Head from "next/head";
import { Metadata, Viewport } from 'next'

const font = Inter({ subsets: ['latin'], weight: ["500", "700"] });

export const viewport: Viewport = {
    themeColor: '#151e3f',
}

export const metadata: Metadata = {
    title: 'Sanjay S - Portfolio',
    description: 'Sanjay, S is a Software Developer having skills on both Android and Web development',
    robots: 'index, follow',
    icons: [
        { rel: 'icon', url: '/favicon.ico' }
    ],
}

export default function RootLayout(props: {
    children: React.ReactNode
}) {
    return (<html lang="en">
        <Head>
            <script dangerouslySetInnerHTML={{
                __html: `window.va = window.va || function () {(window.vaq = window.vaq || []).push(arguments); };`
            }} />
        </Head>
        <body>
            <div id="next-app" className={font.className}>{props.children}</div>
            <script defer src="/_vercel/insights/script.js"></script>
        </body>
    </html>
    )
}