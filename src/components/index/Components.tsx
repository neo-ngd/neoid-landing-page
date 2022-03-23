import { twMerge } from 'tailwind-merge';
import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import credentialTemplate from 'assets/images/components/credential-template.svg';
import demo from 'assets/images/components/demo.svg';
import didDefinition from 'assets/images/components/did-definition.svg';
import issuerLibraries from 'assets/images/components/issuer-libraries.svg';
import trustTemplate from 'assets/images/components/trust-template.svg';
import walletsLibraries from 'assets/images/components/wallets-libraries.svg';

export const Components: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	const { t } = useTranslation('index_Components');

	return (
		<div
			id="components"
			className={twMerge('flex flex-col items-center px-[40px] py-[100px] bg-gray2', className)}
			{...props}
		>
			<div className="text-[46px] text-center">{t('title')}</div>
			<div className="grid xl:grid-cols-3 gap-x-[100px] gap-y-[60px] xl:px-[60px] mt-[60px]">
				<div className="flex xl:flex-col items-center">
					<img className="w-[60px] xl:w-auto" src={credentialTemplate} alt="credential template" />
					<div className="xl:mt-[16px] ml-[8px] xl:ml-0 xl:text-center">
						{t('credentialTemplate')}
					</div>
				</div>
				<div className="flex xl:flex-col items-center">
					<img className="w-[60px] xl:w-auto" src={issuerLibraries} alt="issuer libraries" />
					<div className="xl:mt-[16px] ml-[8px] xl:ml-0 xl:text-center">{t('issuerLibraries')}</div>
				</div>
				<div className="flex xl:flex-col items-center">
					<img className="w-[60px] xl:w-auto" src={walletsLibraries} alt="wallets libraries" />
					<div className="xl:mt-[16px] ml-[8px] xl:ml-0 xl:text-center">
						{t('walletsLibraries')}
					</div>
				</div>
				<div className="flex xl:flex-col items-center">
					<img className="w-[60px] xl:w-auto" src={trustTemplate} alt="trust template" />
					<div className="xl:mt-[16px] ml-[8px] xl:ml-0 xl:text-center">{t('trustTemplate')}</div>
				</div>
				<div className="flex xl:flex-col items-center">
					<img className="w-[60px] xl:w-auto" src={didDefinition} alt="did definition" />
					<div className="xl:mt-[16px] ml-[8px] xl:ml-0 xl:text-center">{t('didDefinition')}</div>
				</div>
				<div className="flex xl:flex-col items-center">
					<img className="w-[60px] xl:w-auto" src={demo} alt="demo" />
					<div className="xl:mt-[16px] ml-[8px] xl:ml-0 xl:text-center">{t('demo')}</div>
				</div>
			</div>
		</div>
	);
};
