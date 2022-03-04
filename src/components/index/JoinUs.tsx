import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import neoLogo from 'assets/images/neo-logo.svg';
import swisscomLogo from 'assets/images/swisscom-logo.svg';

export const JoinUs: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	const { t } = useTranslation('index_JoinUs');

	return (
		<div
			id="joinUs"
			className={twMerge('flex flex-col items-center p-[100px] pb-[120px]', className)}
			{...props}
		>
			<div className="text-[20px] uppercase">{t('community')}</div>
			<div className="mt-[16px] text-[60px]">{t('joinUs')}</div>
			<div className="flex mt-[60px] space-x-[60px]">
				<div className="flex flex-col items-center">
					<img src={neoLogo} alt="neo logo" />
					<div className="mt-[40px] text-[24px]">
						<span className="font-medium">{t('contact')}</span>
						<span> contact@neo.org</span>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={swisscomLogo} alt="swisscom logo" />
					<div className="mt-[40px] text-[24px]">
						<span className="font-medium">{t('contact')}</span>
						<span> blockchain@swisscom.com</span>
					</div>
				</div>
			</div>
		</div>
	);
};
