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
	// const currentPoster = usePlayerStore(state => state.currentPoster);

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		fluid: true,
		aspectRatio: '16:9',
		playbackRates: [0.5, 1, 1.5, 2],
		// poster: currentPoster,

		sources: currentSource ? [currentSource] : sources,
	};

	const handlePlayerReady = (player: ExtPlayerTypes) => {
		playerRef.current = player;
		const store = usePlayerStore.getState();

		player.volume(store.volume);
		player.playbackRate(store.playbackRate);
		player.currentTime(store.currentTime);
		// player.poster(store.currentTime === 0 ? currentPoster : undefined);

		player.on('waiting', () => {
			videojs.log('player is waiting');
		});

		player.on('dispose', () => {
			videojs.log('player will dispose');
		});

		player.on('volumechange', () => {
			store.setVolume(player.volume() || 0.5);
		});

		player.on('play', () => {
			store.setIsPlaying(true);
		});

		player.on('pause', () => {
			store.setIsPlaying(false);
		});

		player.on('ratechange', () => {
			const newRate = player.playbackRate();
			store.setPlaybackRate(newRate || 1);
		});

		player.on('timeupdate', () => {
			const currentTime = player.currentTime();
			const duration = player.duration();
			store.setCurrentTime(currentTime || 0);
			store.setDuration(duration || 0);
		});

		player.on('loadedmetadata', () => {
			store.setDuration(player.duration() || 0);
		});

		player.on('fullscreenchange', () => {
			const isFullscreen = player.isFullscreen();
			store.setFullscreen(isFullscreen || false);
		});

		player.on('enterpictureinpicture', () => {
			store.setPictureInPicture(true);
		});

		player.on('leavepictureinpicture', () => {
			store.setPictureInPicture(false);
		});

		player.on('*', (eventName: string) => {
			console.log(`Player Event: ${eventName}`);
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
