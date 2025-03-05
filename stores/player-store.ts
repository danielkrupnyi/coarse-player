import sources from '@/data/sources.json';
import { PlayerStoreTypes, SourcesTypes, ThemeVariants } from '@/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const usePlayerStore = create<PlayerStoreTypes>()(
	devtools(
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
				playbackRate: 1,
				currentTime: 0,
				duration: 0,
				fullscreen: false,
				pictureInPicture: false,

				setPictureInPicture: (pip: boolean) =>
					set(
						() => ({ pictureInPicture: pip }),
						undefined,
						'player/setPictureInPicture'
					),
				setFullscreen: (fullscreen: boolean) =>
					set(
						() => ({ fullscreen: fullscreen }),
						undefined,
						'player/setFullscreen'
					),
				setPlaybackRate: (rate: number) =>
					set(
						() => ({ playbackRate: rate }),
						undefined,
						'player/setPlaybackRate'
					),
				setCurrentTime: (time: number) =>
					set(
						() => ({ currentTime: time }),
						undefined,
						'player/setCurrentTime'
					),
				setDuration: (duration: number) =>
					set(() => ({ duration: duration }), undefined, 'player/setDuration'),
				changeTheme: (newTheme: ThemeVariants) =>
					set(() => ({ theme: newTheme }), undefined, 'player/changeTheme'),
				setCurrentSource: (src: SourcesTypes) =>
					set(
						() => ({ currentSource: src }),
						undefined,
						'player/setCurrentSource'
					),
				setCurrentPoster: (poster: string) =>
					set(
						() => ({ currentPoster: poster }),
						undefined,
						'player/setCurrentPoster'
					),
				setCurrentSourceIndex: (index: number) =>
					set(
						() => ({ currentSourceIndex: index }),
						undefined,
						'player/setCurrentSourceIndex'
					),
				setIsPlaying: (playing: boolean) =>
					set(() => ({ isPlaying: playing }), undefined, 'player/setIsPlaying'),
				setVolume: (vol: number) =>
					set(() => ({ volume: vol }), undefined, 'player/setVolume'),

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
	)
);

export default usePlayerStore;
