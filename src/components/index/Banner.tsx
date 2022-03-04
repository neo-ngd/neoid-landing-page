import { ComponentProps, FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import fingerprint from 'assets/images/fingerprint-white.svg';
import { Universe } from './Universe';

export const Banner: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	const { t } = useTranslation('index_Banner');

	return (
		<div
			className={twMerge(
				`flex relative flex-col justify-center items-center h-[100vh] min-h-[800px] bg-gradient-to-br from-black to-gray`,
				className,
			)}
			{...props}
		>
			<Universe className="absolute w-full h-full" />
			<img src={fingerprint} alt="fingerprint" />
			<div className="mt-[32px] text-[80px] text-white">
				<span className="font-light">NEO</span>
				<span className="font-medium"> ID</span>
			</div>
			<div className="mt-[20px] text-[20px] leading-loose text-white text-center">
				<Trans
					t={t}
					i18nKey="description"
					components={{
						hl: <span className="text-semibold text-green" />,
					}}
				/>
			</div>
		</div>
	);
};
