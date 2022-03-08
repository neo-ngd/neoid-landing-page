import { Drawer as AntdDrawer } from 'antd';
import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import close from 'assets/images/close.svg';
import { Button } from 'components/base/Button';
import { Link } from 'components/base/Link';
import { Route, ROUTES } from './Header';

interface Props extends ComponentProps<typeof AntdDrawer> {
	onClose?: () => void;
}

export const Drawer: FC<Props> = ({ onClose, ...props }) => {
	const { t } = useTranslation('shared_Header');

	const scrollTo = (route: Route) => {
		if (route.tag != null) {
			const el = document.querySelector<HTMLElement>(route.tag);
			if (el != null) {
				document.scrollingElement?.scrollTo({
					top: el.offsetTop - 60,
					behavior: 'smooth',
				});
				onClose?.();
			}
		}
	};

	return (
		<AntdDrawer width="280px" closeIcon={null} placement="left" onClose={onClose} {...props}>
			<div className="flex flex-col">
				<Button className="mt-[24px] mr-[24px] self-end" onClick={onClose}>
					<img src={close} alt="close" />
				</Button>
				<div className="flex flex-col mt-[48px] ml-[48px] space-y-[32px]">
					{ROUTES.map(route => (
						<Link
							className="text-[16px] font-medium"
							href={route.href}
							to={route.to}
							key={route.name}
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
