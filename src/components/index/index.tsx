import { FC } from 'react';
import { useMeasure, useWindowScroll } from 'react-use';
import { Page } from 'components/shared/Page';
import { Banner } from './Banner';
import { Components } from './Components';
import { Intros } from './Intros';
import { JoinUs } from './JoinUs';

export const Index: FC = () => {
	const { y } = useWindowScroll();
	const [bannerCallback, { height }] = useMeasure();

	return (
		<Page headerDarkMode={y === 0 || y < height - 80} headerVisible={y < 100 || y >= height - 80}>
			<div ref={ref => ref != null && bannerCallback(ref)}>
				<Banner />
			</div>
			<Intros />
			<Components />
			<JoinUs />
		</Page>
	);
};
