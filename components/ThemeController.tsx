'use client';

import { usePlayerStore } from '@/stores';
import { ThemeVariants } from '@/types';

import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

export const ThemeController = () => {
	const theme = usePlayerStore(state => state.theme);
	const changeTheme = usePlayerStore(state => state.changeTheme);

	useEffect(() => {
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		const html = document.documentElement;

		if (theme) {
			html.dataset.theme = theme;
		} else if (prefersDarkScheme.matches) {
			html.dataset.theme = 'dark';
			changeTheme('dark' as ThemeVariants);
		} else {
			html.dataset.theme = 'light';
			changeTheme('light' as ThemeVariants);
		}
	}, [changeTheme, theme]);

	const themeChange = () => {
		const html = document.documentElement;
		const currentTheme = html.dataset.theme;
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		html.dataset.theme = newTheme;
		changeTheme(newTheme as ThemeVariants);
	};

	return (
		<button className='btn btn-ghost btn-circle' onClick={themeChange}>
			{theme === 'dark' ? (
				<Sun className='h-6 w-6 fill-current' />
			) : (
				<Moon className='h-6 w-6 fill-current' />
			)}
		</button>
	);
};
