import sources from '@/data/sources.json';
import { PlayerStoreTypes, SourcesTypes, ThemeVariants } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePlayerStore = create<PlayerStoreTypes>()(
	persist(
		set => ({
			isPlaying: false,
			volume: 0.8,
			currentSource: sources[0],
			currentSourceIndex: 1,
			playlist: sources,
			webcamActive: false,
			recordedChunks: [],
			mediaRecorder: null,
			currentPoster: sources[0].poster,
			recording: false,
			theme: 'dark',

			changeTheme: (newTheme: ThemeVariants) =>
				set(() => ({ theme: newTheme })),
			setCurrentSource: (src: SourcesTypes) =>
				set(() => ({ currentSource: src })),
			setCurrentPoster: (poster: string) =>
				set(() => ({ currentPoster: poster })),
			setCurrentSourceIndex: (index: number) =>
				set(() => ({ currentSourceIndex: index })),
			setIsPlaying: (playing: boolean) => set(() => ({ isPlaying: playing })),
			setVolume: (vol: number) => set(() => ({ volume: vol })),
			setWebcamActive: (active: boolean) =>
				set(() => ({ webcamActive: active })),
			setRecordedChunks: (chunks: Blob[]) =>
				set(() => ({ recordedChunks: chunks })),
			setMediaRecorder: (recorder: MediaRecorder) =>
				set(() => ({ mediaRecorder: recorder })),
			setRecording: (recording: boolean) => set(() => ({ recording })),
		}),
		{
			name: 'player-store', // Key for localStorage
		}
	)
);

export default usePlayerStore;
