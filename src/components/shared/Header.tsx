import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { ReactComponent as Fingerprint } from 'assets/inline-svgs/fingerprint.svg';
import { ReactComponent as Hamburger } from 'assets/inline-svgs/hamburger.svg';
import { Button } from 'components/base/Button';
import { Link } from 'components/base/Link';

export interface Route {
	name: string;
	href?: string;
	to?: string;
	tag?: string;
}

export const ROUTES: Route[] = [
	{
		name: 'about',
		to: '#about',
		tag: '#about',
	},
	{
		name: 'user',
		to: '#user',
		tag: '#user',
	},
	{
		name: 'developer',
		to: '#developer',
		tag: '#developer',
	},
	{
		name: 'components',
		to: '#components',
		tag: '#components',
	},
	{
		name: 'joinUs',
		to: '#joinUs',
		tag: '#joinUs',
	},
];

interface Props extends ComponentProps<'div'> {
	darkMode?: boolean;
	visible?: boolean;
	onHamburgerClick?: () => void;
}

export const Header: FC<Props> = ({
	darkMode,
	visible = true,
	onHamburgerClick,
	className,
	...props
}) => {
	const { t } = useTranslation('shared_Header');

	const scrollTo = (route: Route) => {
		if (route.tag != null) {
			const el = document.querySelector<HTMLElement>(route.tag);
			if (el != null) {
				document.scrollingElement?.scrollTo({
					top: el.offsetTop - 80,
					behavior: 'smooth',
				});
			}
		}
	};

	const scrollToTop = () => {
		document.scrollingElement?.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			className={twMerge(
				`flex fixed top-0 left-0 right-0 z-10 items-center px-[24px] xl:px-[40px] h-[60px] xl:h-[80px] ${
					darkMode ? '' : 'bg-white shadow-md'
				} transition-all ${
					visible ? '' : 'translate-y-[-60px] xl:translate-y-[-80px]'
				} duration-300`,
				className,
			)}
			{...props}
		>
			<Button className="xl:hidden" onClick={onHamburgerClick}>
				<Hamburger className={`${darkMode ? 'text-white' : 'text-black'}`} />
			</Button>
			<Link
				className={`flex ${darkMode ? 'hidden' : ''} ml-[24px] xl:ml-0`}
				to="/"
				onClick={scrollToTop}
			>
				<Fingerprint className="w-auto h-[24px] xl:h-[36px]" />
				<div className="ml-[16px] text-[20px]">
					<span className="font-light">NEO</span>
					<span className="font-medium"> ID</span>
				</div>
			</Link>
			<div className="grow" />
			<div className="hidden xl:flex space-x-[40px] items-center">
				{ROUTES.map(route => (
					<Link
						className={`text-[16px] font-medium ${darkMode ? 'text-white' : ''}`}
						href={route.href}
						to={route.to}
						key={route.name}
						onClick={() => scrollTo(route)}
					>
						{t(`route.${route.name}`)}
					</Link>
				))}
				<Button type="filled" color={darkMode ? 'green' : 'white'}>
					{t('whitePaper')}
				</Button>
				<Button type="filled" color={darkMode ? 'green' : 'white'}>
					{t('demo')}
				</Button>
			</div>
		</div>
	);
};
