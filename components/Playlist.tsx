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

	const handleSourceClick = (source: SourcesTypes) => {
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
										alt={source.title}
									/>
								</div>
								<div>
									<div>{source.title}</div>
									<div className='text-xs uppercase font-semibold opacity-60'>
										10m
									</div>
								</div>
								<button className='btn btn-square btn-ghost'>
									<svg
										className='size-[1.2em]'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
									>
										<g
											strokeLinejoin='round'
											strokeLinecap='round'
											strokeWidth='2'
											fill='none'
											stroke='currentColor'
										>
											<path d='M6 3L20 12 6 21 6 3z'></path>
										</g>
									</svg>
								</button>
								<button className='btn btn-square btn-ghost'>
									<svg
										className='size-[1.2em]'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
									>
										<g
											strokeLinejoin='round'
											strokeLinecap='round'
											strokeWidth='2'
											fill='none'
											stroke='currentColor'
										>
											<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'></path>
										</g>
									</svg>
								</button>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
