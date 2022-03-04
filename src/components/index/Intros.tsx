import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import about from 'assets/images/intros/about.png';
import developer from 'assets/images/intros/developer.png';
import user from 'assets/images/intros/user.png';
import { Button } from 'components/base/Button';

export const Intros: FC<ComponentProps<'div'>> = props => {
	const { t } = useTranslation('index_Intros');

	return (
		<div {...props}>
			<div id="about" className="flex items-center pl-[128px]">
				<div className="flex flex-col items-end text-right">
					<div className="text-[60px]">{t('about')}</div>
					<div className="mt-[32px] text-[20px]">{t('aboutDescr')}</div>
					<div className="mt-[32px]">
						<Button type="filled" size="lg" color="green">
							{t('demo')}
						</Button>
					</div>
				</div>
				<img className="ml-[80px]" src={about} alt="about" />
			</div>
			<div id="user" className="flex items-center pr-[128px] bg-gray2">
				<img src={user} alt="dapps user" />
				<div className="ml-[80px]">
					<div className="text-[60px]">{t('user')}</div>
					<div className="mt-[32px] text-[20px]">{t('userDescr')}</div>
					<div className="mt-[32px]">
						<Button type="filled" size="lg" color="green">
							{t('installWallet')}
						</Button>
					</div>
				</div>
			</div>
			<div id="developer" className="flex items-center pl-[128px]">
				<div className="flex flex-col items-end text-right">
					<div className="text-[60px]">{t('developer')}</div>
					<div className="mt-[32px] text-[20px]">{t('developerDescr')}</div>
					<div className="mt-[32px]">
						<Button type="filled" size="lg" color="white">
							{t('whitePaper')}
						</Button>
						<Button className="ml-[28px]" type="filled" size="lg" color="green">
							{t('github')}
						</Button>
					</div>
				</div>
				<img className="ml-[80px]" src={developer} alt="dapps developer" />
			</div>
		</div>
	);
};
