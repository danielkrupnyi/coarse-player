import { default as PlayerTypes } from 'video.js/dist/types/player';
import videojs from 'video.js/dist/video.min';

export interface ExtPlayerTypes extends PlayerTypes {
	qualityLevels?: () => void;
}

export type PlayerOptions = typeof videojs.options;

export enum ThemeVariants {
	Light = 'light',
	Dark = 'dark',
}

export interface SourcesTypes {
	id: number;
	title: string;
	src: string;
	type: string;
	poster: string;
}

export interface PlayerStoreTypes {
	isPlaying: boolean;
	volume: number;
	currentSource: SourcesTypes | null;
	currentSourceIndex: number;
	playlist: SourcesTypes[];
	webcamActive: boolean;
	recordedChunks: Blob[];
	mediaRecorder: MediaRecorder | null;
	currentPoster: string;
	recording: boolean;
	theme: 'dark' | 'light';
	playbackRate: number;
	currentTime: number;
	duration: number;
	fullscreen: boolean;
	pictureInPicture: boolean;
	setPictureInPicture: (pip: boolean) => void;
	setFullscreen: (fullscreen: boolean) => void;
	setPlaybackRate: (rate: number) => void;
	setCurrentTime: (time: number) => void;
	setDuration: (duration: number) => void;
	changeTheme: (newTheme: ThemeVariants) => void;
	setCurrentSource: (src: SourcesTypes) => void;
	setCurrentSourceIndex: (index: number) => void;
	setCurrentPoster: (poster: string) => void;
	setIsPlaying: (playing: boolean) => void;
	setVolume: (vol: number) => void;
	setWebcamActive: (active: boolean) => void;
	setRecordedChunks: (chunks: Blob[]) => void;
	setMediaRecorder: (recorder: MediaRecorder) => void;
	setRecording: (recording: boolean) => void;
}
