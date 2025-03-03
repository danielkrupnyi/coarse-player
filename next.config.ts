import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'vjs.zencdn.net',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'commondatastorage.googleapis.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
