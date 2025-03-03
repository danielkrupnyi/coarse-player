import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export interface SectionProps {
	children: ReactNode;
	className: string;
}

export const Section: FC<SectionProps> = ({ children, className }) => {
	return <section className={clsx(className)}>{children}</section>;
};
