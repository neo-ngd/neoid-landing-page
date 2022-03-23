import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import chevronRight from 'assets/images/chevron-right.svg';
import about from 'assets/images/intros/about.png';
import developer from 'assets/images/intros/developer.png';
import user from 'assets/images/intros/user.png';
import { Button } from 'components/base/Button';

export const Intros: FC<ComponentProps<'div'>> = props => {
	const { t } = useTranslation('index_Intros');

	return (
		<div {...props}>
			<div id="about" className="flex flex-col items-center xl:flex-row xl:pl-[128px]">
				<div className="flex flex-col items-end px-[32px] pt-[60px] text-right xl:px-0 xl:pt-0">
					<div className="text-[46px]">{t('about')}</div>
					<div className="mt-[32px]">{t('aboutDescr')}</div>
					<Button
						className="mt-[32px] w-full max-w-[400px] justify-between border-0 xl:hidden"
						type="filled"
						size="md"
						color="gray2"
						onClick={() => window.open('https://github.com/neo-ngd/seraph-id-demo')}
					>
						{t('demo')}
						<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
					</Button>
					<Button
						className="mt-[32px] hidden xl:flex"
						type="filled"
						size="lg"
						color="green"
						onClick={() => window.open('https://github.com/neo-ngd/seraph-id-demo')}
					>
						{t('demo')}
					</Button>
				</div>
				<img
					className="w-full max-w-[400px] self-end xl:ml-[80px] xl:h-[400px] xl:w-auto xl:max-w-none xl:self-auto"
					src={about}
					alt="about"
				/>
			</div>

			<div id="user" className="flex flex-col items-center bg-gray2 xl:flex-row xl:pr-[128px]">
				<div className="px-[32px] pt-[60px] xl:order-1 xl:ml-[80px] xl:px-0 xl:pt-0">
					<div className="text-[46px]">{t('user')}</div>
					<div className="mt-[32px]">{t('userDescr')}</div>
					<Button
						className="mt-[32px] w-full max-w-[400px] justify-between border-0 xl:hidden"
						type="filled"
						size="md"
						color="white"
						onClick={() =>
							window.open(
								'https://chrome.google.com/webstore/detail/neoline/cphhlgmgameodnhkjdmkpanlelnlohao',
							)
						}
					>
						{t('installWallet')}
						<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
					</Button>
					<Button
						className="mt-[32px] hidden xl:flex"
						type="filled"
						size="lg"
						color="green"
						onClick={() =>
							window.open(
								'https://chrome.google.com/webstore/detail/neoline/cphhlgmgameodnhkjdmkpanlelnlohao',
							)
						}
					>
						{t('installWallet')}
					</Button>
				</div>
				<img
					className="w-full max-w-[400px] self-start xl:h-[400px] xl:w-auto xl:max-w-none xl:self-auto"
					src={user}
					alt="dapps user"
				/>
			</div>

			<div id="developer" className="flex flex-col items-center xl:flex-row xl:pl-[128px]">
				<div className="flex flex-col items-end px-[32px] pt-[60px] text-right xl:px-0 xl:pt-0">
					<div className="text-[46px]">{t('developer')}</div>
					<div className="mt-[32px]">{t('developerDescr')}</div>
					<div className="mt-[32px] flex flex-col items-end self-stretch xl:flex-row xl:items-stretch xl:self-auto">
						<Button
							className="w-full max-w-[400px] justify-between border-0 xl:hidden"
							type="filled"
							size="md"
							color="gray2"
							onClick={() => window.open('/white-paper.pdf')}
						>
							{t('whitePaper')}
							<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
						</Button>
						<Button
							className="hidden xl:flex"
							type="filled"
							size="lg"
							color="white"
							onClick={() => window.open('/white-paper.pdf')}
						>
							{t('whitePaper')}
						</Button>
						<Button
							className="mt-[32px] w-full max-w-[400px] justify-between border-0 xl:hidden"
							type="filled"
							size="md"
							color="gray2"
							onClick={() => window.open('https://github.com/neo-ngd/seraph-id-smart-contracts')}
						>
							{t('github')}
							<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
						</Button>
						<Button
							className="ml-[24px] hidden xl:flex"
							type="filled"
							size="lg"
							color="green"
							onClick={() => window.open('https://github.com/neo-ngd/seraph-id-smart-contracts')}
						>
							{t('github')}
						</Button>
					</div>
				</div>
				<img
					className="w-full max-w-[400px] self-end xl:ml-[80px] xl:h-[400px] xl:w-auto xl:max-w-none xl:self-auto"
					src={developer}
					alt="dapps developer"
				/>
			</div>
		</div>
	);
};
