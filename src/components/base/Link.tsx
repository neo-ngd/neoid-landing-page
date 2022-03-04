import { ComponentProps, ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Link as RouterLink, To } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'a'> {
	type?: 'primary' | 'secondary';
	to?: To;
}

export const Link = forwardRef<ComponentRef<'a'>, Props>(
	({ ref: _, type = 'primary', to, className, ...props }, ref) => {
		let baseClassName =
			'inline-flex items-center text-[color:inherit] uppercase no-underline transition-all duration-300';

		switch (type) {
			case 'primary':
				baseClassName += ' opacity-100 hover:opacity-60';
				break;
			case 'secondary':
				baseClassName += ' opacity-60 hover:opacity-100';
				break;
		}

		return to != null ? (
			<RouterLink ref={ref} className={twMerge(baseClassName, className)} to={to} {...props} />
		) : (
			<a
				ref={ref}
				className={twMerge(baseClassName, className)}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			/>
		);
	},
);
