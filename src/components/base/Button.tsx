import { twMerge } from 'tailwind-merge';
import { ComponentProps, ComponentRef, forwardRef } from 'react';

interface Props extends Omit<ComponentProps<'button'>, 'type'> {
	type?: 'filled' | 'outline' | 'plain' | 'unstyled';
	size?: 'sm' | 'md' | 'lg';
	color?: 'green' | 'white' | 'gray2';
}

export const Button = forwardRef<ComponentRef<'button'>, Props>(
	(
		{
			type = 'unstyled',
			size = 'md',
			color = 'green',
			disabled = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		let baseClassName =
			/*tw:*/ 'inline-flex justify-center items-center font-medium uppercase rounded-[10px] xl:rounded-full border-[1px] outline-0 hover:opacity-60 transition-all duration-300 cursor-pointer';

		switch (color) {
			case 'green':
				baseClassName +=
					/*tw:*/ ' text-white bg-gradient-to-r from-[#75be39] to-[#bae047] border-transparent';
				break;
			case 'white':
				baseClassName += /*tw:*/ ' text-black bg-white border-black';
				break;
			case 'gray2':
				baseClassName += /*tw:*/ ' text-black bg-gray2 border-black';
				break;
		}

		switch (size) {
			case 'sm':
				baseClassName += /*tw:*/ ' px-[18px] h-[32px] text-[12px]';
				break;
			case 'md':
				baseClassName += /*tw:*/ ' px-[24px] h-[40px] text-[14px]';
				break;
			case 'lg':
				baseClassName += /*tw:*/ ' px-[36px] h-[48px] text-[16px]';
				break;
		}

		switch (type) {
			case 'filled':
				baseClassName += /*tw:*/ '';
				break;
			case 'outline':
				baseClassName += /*tw:*/ ' text-[color:inherit] bg-transparent';
				break;
			case 'plain':
				baseClassName += /*tw:*/ ' text-[color:inherit] bg-transparent border-transparent';
				break;
			case 'unstyled':
				baseClassName +=
					/*tw:*/ ' px-0 h-auto text-[length:inherit] font-[number:inherit] text-[color:inherit] bg-transparent bg-none rounded-none border-0';
				break;
		}

		const disabledClassName = /*tw:*/ 'opacity-30 hover:opacity-30 cursor-not-allowed ';

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
