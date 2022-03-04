import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Header } from './Header';

interface Props extends ComponentProps<'div'> {
	headerDarkMode?: boolean;
}

export const Page: FC<Props> = ({ headerDarkMode, className, children, ...props }) => {
	return (
		<div className={twMerge('flex overflow-x-hidden flex-col grow', className)} {...props}>
			<Header className="shrink-0" darkMode={headerDarkMode} />
			<div className="grow shrink-0">{children}</div>
		</div>
	);
};
