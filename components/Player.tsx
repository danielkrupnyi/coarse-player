'use client';

import { usePlayerStore } from '@/stores';
import { ExtPlayerTypes } from '@/types';
import { useRef } from 'react';
import videojs from 'video.js';
import { Container } from './Container';
import { Playlist } from './Playlist';
import { Section } from './Section';
import VideoJS from './VideoJS';

export const Player = () => {
	const playerRef = useRef<ExtPlayerTypes>(null);
	const sources = usePlayerStore(state => state.playlist);
	const currentSource = usePlayerStore(state => state.currentSource);
	const currentPoster = usePlayerStore(state => state.currentPoster);

	const videoJsOptions = {
		autoplay: false,
		controls: true,
		fluid: true,
		aspectRatio: '16:9',
		playbackRates: [0.5, 1, 1.5, 2],
		poster: currentPoster,
		sources: currentSource ? [currentSource] : sources,
	};

	const handlePlayerReady = (player: ExtPlayerTypes) => {
		playerRef.current = player;

		player.on('waiting', () => {
			videojs.log('player is waiting');
		});

		player.on('dispose', () => {
			videojs.log('player will dispose');
		});
	};

	return (
		<Section className='py-11'>
			<Container>
				<div className='flex flex-col xl:flex-row gap-6 relative'>
					<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
					<Playlist />
				</div>
			</Container>
		</Section>
	);
};
