import { ComponentProps, FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { ReactComponent as Fingerprint } from 'assets/inline-svgs/fingerprint.svg';
import { Button } from 'components/base/Button';
import { Universe } from './Universe';

export const Banner: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	const { t } = useTranslation('index_Banner');

	return (
		<div
			className={twMerge(
				`relative isolate flex h-[100vh] min-h-[600px] flex-col items-center justify-center bg-gradient-to-br from-black to-gray`,
				className,
			)}
			{...props}
		>
			<Universe className="absolute -z-10 h-full w-full" />
			<Fingerprint className="h-[60px] w-auto text-gray2 xl:h-[90px]" />
			<div className="mt-[32px] text-[46px] text-white xl:text-[60px]">
				<span className="font-light">NEO</span>
				<span className="font-medium"> ID</span>
			</div>
			<div className="mt-[16px] px-[40px] text-center text-[16px] leading-loose text-white xl:text-[20px]">
				<Trans
					t={t}
					i18nKey="description"
					components={{
						hl: <span className="font-semibold text-green" />,
					}}
				/>
			</div>
			<div className="mt-[32px] flex flex-col xl:hidden">
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
