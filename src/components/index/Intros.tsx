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
			<div id="about" className="flex flex-col xl:flex-row items-center xl:pl-[128px]">
				<div className="flex flex-col items-end px-[32px] xl:px-0 pt-[60px] xl:pt-0 text-right">
					<div className="text-[46px]">{t('about')}</div>
					<div className="mt-[32px]">{t('aboutDescr')}</div>
					<Button
						className="xl:hidden justify-between mt-[32px] w-full max-w-[400px] border-0"
						type="filled"
						size="md"
						color="gray2"
					>
						{t('demo')}
						<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
					</Button>
					<Button className="hidden xl:flex mt-[32px]" type="filled" size="lg" color="green">
						{t('demo')}
					</Button>
				</div>
				<img
					className="self-end xl:self-auto xl:ml-[80px] w-full xl:w-auto max-w-[400px] xl:max-w-none xl:h-[400px]"
					src={about}
					alt="about"
				/>
			</div>

			<div id="user" className="flex flex-col xl:flex-row items-center xl:pr-[128px] bg-gray2">
				<div className="xl:order-1 px-[32px] xl:px-0 pt-[60px] xl:pt-0 xl:ml-[80px]">
					<div className="text-[46px]">{t('user')}</div>
					<div className="mt-[32px]">{t('userDescr')}</div>
					<Button
						className="xl:hidden justify-between mt-[32px] w-full max-w-[400px] border-0"
						type="filled"
						size="md"
						color="white"
					>
						{t('demo')}
						<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
					</Button>
					<Button className="hidden xl:flex mt-[32px]" type="filled" size="lg" color="green">
						{t('installWallet')}
					</Button>
				</div>
				<img
					className="self-start xl:self-auto w-full xl:w-auto max-w-[400px] xl:max-w-none xl:h-[400px]"
					src={user}
					alt="dapps user"
				/>
			</div>

			<div id="developer" className="flex flex-col xl:flex-row items-center xl:pl-[128px]">
				<div className="flex flex-col items-end px-[32px] xl:px-0 pt-[60px] xl:pt-0 text-right">
					<div className="text-[46px]">{t('developer')}</div>
					<div className="mt-[32px]">{t('developerDescr')}</div>
					<div className="flex flex-col xl:flex-row items-end xl:items-stretch self-stretch xl:self-auto mt-[32px]">
						<Button
							className="xl:hidden justify-between w-full max-w-[400px] border-0"
							type="filled"
							size="md"
							color="gray2"
						>
							{t('whitePaper')}
							<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
						</Button>
						<Button className="hidden xl:flex" type="filled" size="lg" color="white">
							{t('whitePaper')}
						</Button>
						<Button
							className="xl:hidden justify-between mt-[32px] w-full max-w-[400px] border-0"
							type="filled"
							size="md"
							color="gray2"
						>
							{t('github')}
							<img className="ml-[24px]" src={chevronRight} alt="chevron right" />
						</Button>
						<Button className="hidden xl:flex ml-[24px]" type="filled" size="lg" color="green">
							{t('github')}
						</Button>
					</div>
				</div>
				<img
					className="self-end xl:self-auto xl:ml-[80px] w-full xl:w-auto max-w-[400px] xl:max-w-none xl:h-[400px]"
					src={developer}
					alt="dapps developer"
				/>
			</div>
		</div>
	);
};
