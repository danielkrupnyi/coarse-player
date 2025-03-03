import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Coarse Player',
	description: 'Video player with playlist',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/images/favicon-light.ico',
				href: '/images/favicon-light.ico',
			},
			{
				media: '(prefers-color-scheme: dark',
				url: '/images/favicon-dark.ico',
				href: '/images/favicon-dark.ico',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
