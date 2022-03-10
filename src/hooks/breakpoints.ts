import { findLast } from 'lodash-es';
import { useCallback, useEffect, useMemo, useState } from 'react';

type Config = { base: string; [key: string]: string };

export function useBreakpoint<C extends Config = Config, B extends keyof C = keyof C>(
	config: C,
	defaultBreakpoint = 'base' as B,
): B {
	const breakpoints = useMemo(() => {
		return Object.keys(config) as B[];
	}, [config]);

	const mediaQueries = useMemo(() => {
		if (typeof window === 'undefined') {
			return [];
		}
		return breakpoints.map(breakpoint => {
			return {
				breakpoint,
				list: window.matchMedia(`(min-width: ${config[breakpoint]})`),
			};
		});
	}, [config, breakpoints]);

	const getCurrentBreakpoint = useCallback(() => {
		return (
			findLast(mediaQueries, mediaQuery => mediaQuery.list.matches)?.breakpoint ?? defaultBreakpoint
		);
	}, [mediaQueries, defaultBreakpoint]);

	const [currentBreakpoint, setCurrentBreakpoint] = useState(() => {
		return getCurrentBreakpoint();
	});

	useEffect(() => {
		const unsubscribers = mediaQueries.map(mediaQuery => {
			const listener = () => {
				setCurrentBreakpoint(getCurrentBreakpoint());
			};
			mediaQuery.list.addEventListener('change', listener);
			return () => mediaQuery.list.removeEventListener('change', listener);
		});
		return () => unsubscribers.forEach(unsubscriber => unsubscriber());
	}, [mediaQueries, getCurrentBreakpoint]);

	return currentBreakpoint;
}

export function useBreakpointValue<V, C extends Config = Config, B extends keyof C = keyof C>(
	values: { base: V } & Partial<Record<B, V>>,
	config: C,
	defaultBreakpoint = 'base' as B,
): V {
	const breakpoints = useMemo(() => {
		return Object.keys(config) as B[];
	}, [config]);

	const currentBreakpoint = useBreakpoint(config, defaultBreakpoint);

	let value = values.base;
	for (const breakpoint of breakpoints) {
		const temp = values[breakpoint];
		if (temp !== undefined) {
			value = temp as V;
		}
		if (breakpoint === currentBreakpoint) {
			break;
		}
	}
	return value;
}
