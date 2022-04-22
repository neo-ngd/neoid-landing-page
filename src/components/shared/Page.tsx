import { ComponentProps, FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer } from './Drawer';
import { Header } from './Header';

interface Props extends ComponentProps<'div'> {
  headerDarkMode?: boolean;
  headerVisible?: boolean;
}

export const Page: FC<Props> = ({
  className,
  headerDarkMode,
  headerVisible,
  children,
  ...props
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className={twMerge('flex grow flex-col', className)} {...props}>
      <Header
        darkMode={headerDarkMode}
        visible={headerVisible}
        onHamburgerClick={() => setDrawerVisible(true)}
      />
      <div className="shrink-0 grow">{children}</div>
      <Drawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </div>
  );
};
