'use client';

import { usePlayerStore } from '@/stores';
import { SourcesTypes } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

export const Playlist = () => {
	const sources = usePlayerStore(state => state.playlist);
	const currentSource = usePlayerStore(state => state.currentSource);
	const currentSourceIndex = usePlayerStore(state => state.currentSourceIndex);
	const setCurrentSource = usePlayerStore(state => state.setCurrentSource);
	const setCurrentPoster = usePlayerStore(state => state.setCurrentPoster);
	const setCurrentSourceIndex = usePlayerStore(
		state => state.setCurrentSourceIndex
	);

	const handleSourceClick = async (source: SourcesTypes) => {
		setCurrentSource(source);
		setCurrentPoster(source.poster);
		const idx = sources.findIndex(s => s.id === source.id);
		setCurrentSourceIndex(idx + 1);
	};

	return (
		<div className='xl:w-[30%] flex'>
			<div className='relative w-full'>
				<ul className='list h-full bg-base-100 rounded-box shadow-md'>
					<li className='flex p-4 pb-2 text-xs opacity-60 tracking-wide'>
						<span className='flex-1'>Playlist</span>
						<span className='flex-none'>
							{currentSourceIndex}/{sources && sources.length}
						</span>
					</li>
					{sources &&
						sources.map(source => (
							<li
								onClick={() => handleSourceClick(source)}
								key={source.id}
								className={clsx(
									'list-row cursor-pointer',
									currentSource?.id === source.id && 'bg-base-300'
								)}
							>
								<div className='relative w-20 h-14'>
									<Image
										className='rounded-box object-cover'
										src={source.poster}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										alt={source.title}
									/>
								</div>
								<div>
									<div>{source.title}</div>
									<div className='text-xs uppercase font-semibold opacity-60'>
										10m
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
