import { FC, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Index } from './components/index';

export const App: FC = () => {
	const location = useLocation();

	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<Routes>
			<Route index element={<Index />} />
		</Routes>
	);
};
