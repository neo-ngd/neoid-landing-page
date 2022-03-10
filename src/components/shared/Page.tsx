import { ComponentProps, FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer } from './Drawer';
import { Header } from './Header';

interface Props extends ComponentProps<'div'> {
	headerDarkMode?: boolean;
	headerVisible?: boolean;
}

export const Page: FC<Props> = ({
	headerDarkMode,
	headerVisible,
	className,
	children,
	...props
}) => {
	const [drawerVisible, setDrawerVisible] = useState(false);

	return (
		<div className={twMerge('flex overflow-x-hidden flex-col grow', className)} {...props}>
			<Header
				darkMode={headerDarkMode}
				visible={headerVisible}
				onHamburgerClick={() => setDrawerVisible(true)}
			/>
			<div className="grow shrink-0">{children}</div>
			<Drawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
		</div>
	);
};
