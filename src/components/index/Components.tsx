import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
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
			className={twMerge('flex flex-col items-center p-[100px] bg-gray2', className)}
			{...props}
		>
			<div className="text-[60px]">{t('title')}</div>
			<div className="grid grid-cols-3 gap-x-[100px] gap-y-[60px] mt-[60px]">
				<div className="flex flex-col items-center">
					<img src={credentialTemplate} alt="credential template" />
					<div className="mt-[16px] text-[20px] text-center">{t('credentialTemplate')}</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={issuerLibraries} alt="issuer libraries" />
					<div className="mt-[16px] text-[20px] text-center">{t('issuerLibraries')}</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={walletsLibraries} alt="wallets libraries" />
					<div className="mt-[16px] text-[20px] text-center">{t('walletsLibraries')}</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={trustTemplate} alt="trust template" />
					<div className="mt-[16px] text-[20px] text-center">{t('trustTemplate')}</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={didDefinition} alt="did definition" />
					<div className="mt-[16px] text-[20px] text-center">{t('didDefinition')}</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={demo} alt="demo" />
					<div className="mt-[16px] text-[20px] text-center">{t('demo')}</div>
				</div>
			</div>
		</div>
	);
};
