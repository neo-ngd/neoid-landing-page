import { ComponentProps, ComponentRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends Omit<ComponentProps<'button'>, 'type'> {
	type?: 'filled' | 'outline' | 'plain' | 'unstyled';
	size?: 'sm' | 'md' | 'lg';
	color?: 'green' | 'white' | 'gray2';
}

export const Button = forwardRef<ComponentRef<'button'>, Props>(
	(
		{ type = 'unstyled', size = 'md', color = 'green', disabled, className, children, ...props },
		ref,
	) => {
		let baseClassName =
			'inline-flex justify-center items-center font-medium uppercase rounded-[10px] xl:rounded-full border-[1px] outline-0 hover:opacity-60 transition-all duration-300 cursor-pointer';

		switch (color) {
			case 'green':
				baseClassName +=
					' text-white bg-gradient-to-r from-[#75be39] to-[#bae047] border-transparent';
				break;
			case 'white':
				baseClassName += ' text-black bg-white border-black';
				break;
			case 'gray2':
				baseClassName += ' text-black bg-gray2 border-black';
				break;
		}

		switch (size) {
			case 'sm':
				baseClassName += ' px-[18px] h-[32px] text-[12px]';
				break;
			case 'md':
				baseClassName += ' px-[24px] h-[40px] text-[14px]';
				break;
			case 'lg':
				baseClassName += ' px-[36px] h-[48px] text-[16px]';
				break;
		}

		switch (type) {
			case 'filled':
				baseClassName += '';
				break;
			case 'outline':
				baseClassName += ' text-[color:inherit] bg-transparent';
				break;
			case 'plain':
				baseClassName += ' text-[color:inherit] bg-transparent border-transparent';
				break;
			case 'unstyled':
				baseClassName +=
					' px-0 h-auto text-[length:inherit] font-[weight:inherit] text-[color:inherit] bg-transparent bg-none rounded-none border-0';
				break;
		}

		const disabledClassName = 'opacity-30 hover:opacity-30 cursor-not-allowed ';

		return (
			<button
				ref={ref}
				className={twMerge(baseClassName, disabled && disabledClassName, className)}
				type="button"
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		);
	},
);
