import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Ref = ComponentRef<'a'> | ComponentRef<typeof RouterLink>;

type Props = (ComponentPropsWithoutRef<'a'> | ComponentPropsWithoutRef<typeof RouterLink>) & {
	type?: 'primary' | 'secondary';
};

export const Link = forwardRef<Ref, Props>(({ type = 'primary', className, ...props }, ref) => {
	let baseClassName =
		/*tw:*/ 'inline-flex items-center text-[color:inherit] uppercase no-underline transition-all duration-300';

	switch (type) {
		case 'primary':
			baseClassName += /*tw:*/ ' opacity-100 hover:opacity-60';
			break;
		case 'secondary':
			baseClassName += /*tw:*/ ' opacity-60 hover:opacity-100';
			break;
	}

	return 'to' in props && props.to != null ? (
		<RouterLink ref={ref} className={twMerge(baseClassName, className)} {...props} />
	) : (
		<a
			ref={ref}
			className={twMerge(baseClassName, className)}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		/>
	);
});
