import { twMerge } from '@liuqiang1357/tailwind-merge';
import { ComponentProps, FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ReactComponent as Fingerprint } from 'assets/inline-svgs/fingerprint.svg';
import { Button } from 'components/base/Button';
import { Universe } from './Universe';

export const Banner: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	const { t } = useTranslation('index_Banner');

	return (
		<div
			className={twMerge(
				`flex isolate relative flex-col justify-center items-center h-[100vh] min-h-[600px] bg-gradient-to-br from-black to-gray`,
				className,
			)}
			{...props}
		>
			<Universe className="absolute w-full h-full -z-10" />
			<Fingerprint className="w-auto h-[60px] xl:h-[90px] text-gray2" />
			<div className="mt-[32px] text-[46px] xl:text-[60px] text-white">
				<span className="font-light">NEO</span>
				<span className="font-medium"> ID</span>
			</div>
			<div className="px-[40px] mt-[16px] text-[16px] xl:text-[20px] leading-loose text-center text-white">
				<Trans
					t={t}
					i18nKey="description"
					components={{
						hl: <span className="font-semibold text-green" />,
					}}
				/>
			</div>
			<div className="flex xl:hidden flex-col mt-[32px]">
				<Button
					type="filled"
					size="lg"
					color="green"
					onClick={() => window.open('/white-paper.pdf')}
				>
					{t('whitePaper')}
				</Button>
				<Button
					className="mt-[24px]"
					type="filled"
					size="lg"
					color="green"
					onClick={() => window.open('https://github.com/neo-ngd/seraph-id-demo')}
				>
					{t('demo')}
				</Button>
			</div>
		</div>
	);
};
