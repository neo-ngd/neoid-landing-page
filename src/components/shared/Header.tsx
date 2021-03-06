import { useBreakpointValue } from '@liuqiang1357/react-breakpoints';
import { ComponentProps, CSSProperties, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { ReactComponent as Fingerprint } from 'assets/inline-svgs/fingerprint.svg';
import { ReactComponent as Hamburger } from 'assets/inline-svgs/hamburger.svg';
import { Button } from 'components/base/Button';
import { Link } from 'components/base/Link';
import { BREAKPOINTS } from 'utils/misc';

export interface Route {
  name: string;
  href?: string;
  to?: string;
  replace?: boolean;
  tag?: string;
}

export const ROUTES: Route[] = [
  {
    name: 'about',
    to: '#about',
    replace: true,
    tag: '#about',
  },
  {
    name: 'user',
    to: '#user',
    replace: true,
    tag: '#user',
  },
  {
    name: 'developer',
    to: '#developer',
    replace: true,
    tag: '#developer',
  },
  {
    name: 'components',
    to: '#components',
    replace: true,
    tag: '#components',
  },
  {
    name: 'joinUs',
    to: '#joinUs',
    replace: true,
    tag: '#joinUs',
  },
];

export const HEADER_HEGIT = {
  base: 60,
  xl: 80,
};

interface Props extends ComponentProps<'div'> {
  darkMode?: boolean;
  visible?: boolean;
  onHamburgerClick?: () => void;
}

export const Header: FC<Props> = ({
  className,
  darkMode = false,
  visible = true,
  onHamburgerClick,
  ...props
}) => {
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
        `fixed left-0 right-0 z-10 flex h-[var(--header-height)] items-center px-[24px] transition-all duration-300 xl:px-[40px] ${
          darkMode ? '' : 'bg-white shadow-md'
        } ${visible ? '' : '-translate-y-full'}`,
        className,
      )}
      style={{ '--header-height': `${headerHeight}px` } as CSSProperties}
      {...props}
    >
      <Button className="xl:hidden" onClick={onHamburgerClick}>
        <Hamburger className={`${darkMode ? 'text-white' : 'text-black'}`} />
      </Button>
      <Link
        className={`ml-[24px] flex xl:ml-0 ${darkMode ? 'hidden' : ''}`}
        to="/"
        replace
        onClick={scrollToTop}
      >
        <Fingerprint className="h-[24px] w-auto xl:h-[36px]" />
        <div className="ml-[16px] text-[20px]">
          <span className="font-light">NEO</span>
          <span className="font-medium"> ID</span>
        </div>
      </Link>
      <div className="grow" />
      <div className="hidden items-center space-x-[40px] xl:flex">
        {ROUTES.map(route => (
          <Link
            key={route.name}
            className={`text-[16px] font-medium ${darkMode ? 'text-white' : ''}`}
            href={route.href}
            to={route.to}
            replace={route.replace}
            onClick={() => scrollTo(route)}
          >
            {t(`route.${route.name}`)}
          </Link>
        ))}
        <Button
          type="filled"
          color={darkMode ? 'green' : 'white'}
          onClick={() => window.open('/white-paper.pdf')}
        >
          {t('whitePaper')}
        </Button>
        <Button
          type="filled"
          color={darkMode ? 'green' : 'white'}
          onClick={() => window.open('https://github.com/neo-ngd/seraph-id-demo')}
        >
          {t('demo')}
        </Button>
      </div>
    </div>
  );
};
