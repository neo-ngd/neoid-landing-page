import { useBreakpointValue } from '@liuqiang1357/react-breakpoints';
import { FC } from 'react';
import { useMeasure, useWindowScroll } from 'react-use';
import { HEADER_HEGIT } from 'components/shared/Header';
import { Page } from 'components/shared/Page';
import { BREAKPOINTS } from 'utils/misc';
import { Banner } from './Banner';
import { Components } from './Components';
import { Intros } from './Intros';
import { JoinUs } from './JoinUs';

export const Index: FC = () => {
  const { y } = useWindowScroll();
  const [bannerCallback, { height }] = useMeasure();

  const headerHeight = useBreakpointValue(HEADER_HEGIT, BREAKPOINTS);

  return (
    <Page
      headerDarkMode={y === 0 || y < height - headerHeight}
      headerVisible={y < 100 || y >= height - headerHeight}
    >
      <div ref={ref => ref && bannerCallback(ref)}>
        <Banner />
      </div>
      <Intros />
      <Components />
      <JoinUs />
    </Page>
  );
};
