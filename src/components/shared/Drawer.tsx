import { useBreakpointValue } from '@liuqiang1357/react-breakpoints';
import { Drawer as AntdDrawer } from 'antd';
import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import close from 'assets/images/close.svg';
import { Button } from 'components/base/Button';
import { Link } from 'components/base/Link';
import { BREAKPOINTS } from 'utils/misc';
import { HEADER_HEGIT, Route, ROUTES } from './Header';

interface Props extends ComponentProps<typeof AntdDrawer> {
	onClose?: () => void;
}

export const Drawer: FC<Props> = ({ onClose, ...props }) => {
	const { t } = useTranslation('shared_Header');

	const headerHeight = useBreakpointValue(HEADER_HEGIT, BREAKPOINTS);

	const scrollTo = (route: Route) => {
		if (route.tag != null) {
			const el = document.querySelector<HTMLElement>(route.tag);
			if (el) {
				document.scrollingElement?.scrollTo({
					top: el.offsetTop - headerHeight,
					behavior: 'smooth',
				});
				onClose?.();
			}
		}
	};

	return (
		<AntdDrawer width="280px" closeIcon={null} placement="left" onClose={onClose} {...props}>
			<div className="flex flex-col pb-[48px]">
				<Button className="mt-[24px] mr-[24px] self-end" onClick={onClose}>
					<img src={close} alt="close" />
				</Button>
				<div className="mt-[48px] ml-[48px] flex flex-col space-y-[32px]">
					{ROUTES.map(route => (
						<Link
							key={route.name}
							className="text-[16px] font-medium"
							href={route.href}
							to={route.to}
							replace={route.replace}
							onClick={() => scrollTo(route)}
						>
							{t(`route.${route.name}`)}
						</Link>
					))}
				</div>
			</div>
		</AntdDrawer>
	);
};
