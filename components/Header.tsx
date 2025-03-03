import { SquarePlay } from 'lucide-react';
import Link from 'next/link';
import { Container } from './Container';
import { ThemeController } from './ThemeController';

export const Header = () => {
	return (
		<header className='sticky top-0 bg-base-100/80 backdrop-blur shadow-sm z-40'>
			<Container>
				<nav className='navbar'>
					<div className='flex-1'>
						<Link
							href='/'
							className='flex-1 items-center gap-2 btn btn-ghost text-xl'
						>
							<SquarePlay className='h-6 w-6' />
							<span>Coarse Player</span>
						</Link>
					</div>
					<div className='flex-none'>
						<ThemeController />
					</div>
				</nav>
			</Container>
		</header>
	);
};
