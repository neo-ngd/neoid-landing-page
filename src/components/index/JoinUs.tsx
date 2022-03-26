import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import neoLogo from 'assets/images/neo-logo.png';
import swisscomLogo from 'assets/images/swisscom-logo.png';

export const JoinUs: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const { t } = useTranslation('index_JoinUs');

  return (
    <div
      id="joinUs"
      className={twMerge('flex flex-col items-center px-[40px] py-[100px] pb-[120px]', className)}
      {...props}
    >
      <div className="uppercase">{t('community')}</div>
      <div className="mt-[16px] text-[46px]">{t('joinUs')}</div>
      <div className="mt-[60px] flex flex-col space-y-[60px] xl:flex-row xl:space-x-[60px] xl:space-y-0">
        <div className="flex flex-col items-center">
          <img src={neoLogo} alt="neo logo" />
          <div className="mt-[32px]">
            <span className="font-medium">{t('contact')}</span>
            <span className="ml-[8px]">contact@neo.org</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={swisscomLogo} alt="swisscom logo" />
          <div className="mt-[32px]">
            <span className="font-medium">{t('contact')}</span>
            <span className="ml-[8px]">blockchain@swisscom.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
